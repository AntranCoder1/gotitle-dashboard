import Sequelize, { DataTypes, Model, Optional } from 'sequelize';

export interface cloud_storage_settingAttributes {
  id: number;
  setting_key?: string;
  setting_value?: string;
  is_limit: number;
  created_at: Date;
  updated_at: Date;
}

export type cloud_storage_settingPk = "id";
export type cloud_storage_settingId = cloud_storage_setting[cloud_storage_settingPk];
export type cloud_storage_settingCreationAttributes = Optional<cloud_storage_settingAttributes, cloud_storage_settingPk>;

export class cloud_storage_setting extends Model<cloud_storage_settingAttributes, cloud_storage_settingCreationAttributes> implements cloud_storage_settingAttributes {
  id!: number;
  setting_key?: string;
  setting_value?: string;
  is_limit!: number;
  created_at!: Date;
  updated_at!: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof cloud_storage_setting {
    cloud_storage_setting.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    setting_key: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    setting_value: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    is_limit: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'cloud_storage_setting',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  return cloud_storage_setting;
  }
}
