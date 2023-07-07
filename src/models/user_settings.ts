import Sequelize, { DataTypes, Model, Optional } from "sequelize";
import type { locations, locationsId } from "./locations";
import type {
  user_setting_locations,
  user_setting_locationsId,
} from "./user_setting_locations";
import type { users, usersCreationAttributes, usersId } from "./users";

export interface user_settingsAttributes {
  id: number;
  dwolla_customer?: string;
  dwolla_funding_source?: string;
  last_digits_bank_account?: string;
  created_at: Date;
  updated_at: Date;
}

export type user_settingsPk = "id";
export type user_settingsId = user_settings[user_settingsPk];
export type user_settingsCreationAttributes = Optional<
  user_settingsAttributes,
  user_settingsPk
>;

export class user_settings
  extends Model<user_settingsAttributes, user_settingsCreationAttributes>
  implements user_settingsAttributes
{
  id!: number;
  dwolla_customer?: string;
  dwolla_funding_source?: string;
  last_digits_bank_account?: string;
  created_at!: Date;
  updated_at!: Date;

  // user_settings belongsToMany locations via user_setting_id and location_id
  locations!: locations[];
  getLocations!: Sequelize.BelongsToManyGetAssociationsMixin<locations>;
  setLocations!: Sequelize.BelongsToManySetAssociationsMixin<
    locations,
    locationsId
  >;
  addLocation!: Sequelize.BelongsToManyAddAssociationMixin<
    locations,
    locationsId
  >;
  addLocations!: Sequelize.BelongsToManyAddAssociationsMixin<
    locations,
    locationsId
  >;
  createLocation!: Sequelize.BelongsToManyCreateAssociationMixin<locations>;
  removeLocation!: Sequelize.BelongsToManyRemoveAssociationMixin<
    locations,
    locationsId
  >;
  removeLocations!: Sequelize.BelongsToManyRemoveAssociationsMixin<
    locations,
    locationsId
  >;
  hasLocation!: Sequelize.BelongsToManyHasAssociationMixin<
    locations,
    locationsId
  >;
  hasLocations!: Sequelize.BelongsToManyHasAssociationsMixin<
    locations,
    locationsId
  >;
  countLocations!: Sequelize.BelongsToManyCountAssociationsMixin;
  // user_settings hasMany user_setting_locations via user_setting_id
  user_setting_locations!: user_setting_locations[];
  getUser_setting_locations!: Sequelize.HasManyGetAssociationsMixin<user_setting_locations>;
  setUser_setting_locations!: Sequelize.HasManySetAssociationsMixin<
    user_setting_locations,
    user_setting_locationsId
  >;
  addUser_setting_location!: Sequelize.HasManyAddAssociationMixin<
    user_setting_locations,
    user_setting_locationsId
  >;
  addUser_setting_locations!: Sequelize.HasManyAddAssociationsMixin<
    user_setting_locations,
    user_setting_locationsId
  >;
  createUser_setting_location!: Sequelize.HasManyCreateAssociationMixin<user_setting_locations>;
  removeUser_setting_location!: Sequelize.HasManyRemoveAssociationMixin<
    user_setting_locations,
    user_setting_locationsId
  >;
  removeUser_setting_locations!: Sequelize.HasManyRemoveAssociationsMixin<
    user_setting_locations,
    user_setting_locationsId
  >;
  hasUser_setting_location!: Sequelize.HasManyHasAssociationMixin<
    user_setting_locations,
    user_setting_locationsId
  >;
  hasUser_setting_locations!: Sequelize.HasManyHasAssociationsMixin<
    user_setting_locations,
    user_setting_locationsId
  >;
  countUser_setting_locations!: Sequelize.HasManyCountAssociationsMixin;
  // user_settings hasOne users via user_setting_id
  user!: users;
  getUser!: Sequelize.HasOneGetAssociationMixin<users>;
  setUser!: Sequelize.HasOneSetAssociationMixin<users, usersId>;

  static initModel(sequelize: Sequelize.Sequelize): typeof user_settings {
    user_settings.init(
      {
        id: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
        },
        dwolla_customer: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        dwolla_funding_source: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        last_digits_bank_account: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        created_at: {
          type: DataTypes.DATE,
          allowNull: false,
        },
        updated_at: {
          type: DataTypes.DATE,
          allowNull: false,
        },
      },
      {
        sequelize,
        tableName: "user_settings",
        timestamps: false,
        indexes: [
          {
            name: "PRIMARY",
            unique: true,
            using: "BTREE",
            fields: [{ name: "id" }],
          },
        ],
      }
    );
    return user_settings;
  }
}
