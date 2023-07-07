import Sequelize, { DataTypes, Model, Optional } from 'sequelize';

export interface settingsAttributes {
  id: number;
  created_at: Date;
  updated_at: Date;
  setting_key?: string;
  setting_value?: string;
}

export type settingsPk = "id";
export type settingsId = settings[settingsPk];
export type settingsCreationAttributes = Optional<settingsAttributes, settingsPk>;

export class settings extends Model<settingsAttributes, settingsCreationAttributes> implements settingsAttributes {
  id!: number;
  created_at!: Date;
  updated_at!: Date;
  setting_key?: string;
  setting_value?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof settings {
    settings.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
    setting_key: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    setting_value: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'settings',
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
  return settings;
  }
}
