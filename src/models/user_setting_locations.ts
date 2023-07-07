import Sequelize, { DataTypes, Model, Optional } from 'sequelize';
import type { locations, locationsId } from './locations';
import type { user_settings, user_settingsId } from './user_settings';

export interface user_setting_locationsAttributes {
  user_setting_id: number;
  location_id: number;
}

export type user_setting_locationsPk = "user_setting_id" | "location_id";
export type user_setting_locationsId = user_setting_locations[user_setting_locationsPk];
export type user_setting_locationsCreationAttributes = Optional<user_setting_locationsAttributes, user_setting_locationsPk>;

export class user_setting_locations extends Model<user_setting_locationsAttributes, user_setting_locationsCreationAttributes> implements user_setting_locationsAttributes {
  user_setting_id!: number;
  location_id!: number;

  // user_setting_locations belongsTo locations via location_id
  location!: locations;
  getLocation!: Sequelize.BelongsToGetAssociationMixin<locations>;
  setLocation!: Sequelize.BelongsToSetAssociationMixin<locations, locationsId>;
  createLocation!: Sequelize.BelongsToCreateAssociationMixin<locations>;
  // user_setting_locations belongsTo user_settings via user_setting_id
  user_setting!: user_settings;
  getUser_setting!: Sequelize.BelongsToGetAssociationMixin<user_settings>;
  setUser_setting!: Sequelize.BelongsToSetAssociationMixin<user_settings, user_settingsId>;
  createUser_setting!: Sequelize.BelongsToCreateAssociationMixin<user_settings>;

  static initModel(sequelize: Sequelize.Sequelize): typeof user_setting_locations {
    user_setting_locations.init({
    user_setting_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'user_settings',
        key: 'id'
      }
    },
    location_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'locations',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'user_setting_locations',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "user_setting_id" },
          { name: "location_id" },
        ]
      },
      {
        name: "IDX_B23F63AB49527B9E",
        using: "BTREE",
        fields: [
          { name: "user_setting_id" },
        ]
      },
      {
        name: "IDX_B23F63AB64D218E",
        using: "BTREE",
        fields: [
          { name: "location_id" },
        ]
      },
    ]
  });
  return user_setting_locations;
  }
}
