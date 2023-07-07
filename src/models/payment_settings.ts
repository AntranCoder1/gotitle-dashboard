import Sequelize, { DataTypes, Model, Optional } from 'sequelize';

export interface payment_settingsAttributes {
  id: number;
  keyword: string;
  label: string;
  value?: string;
  required: number;
  created_at: Date;
  updated_at: Date;
}

export type payment_settingsPk = "id";
export type payment_settingsId = payment_settings[payment_settingsPk];
export type payment_settingsCreationAttributes = Optional<payment_settingsAttributes, payment_settingsPk>;

export class payment_settings extends Model<payment_settingsAttributes, payment_settingsCreationAttributes> implements payment_settingsAttributes {
  id!: number;
  keyword!: string;
  label!: string;
  value?: string;
  required!: number;
  created_at!: Date;
  updated_at!: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof payment_settings {
    payment_settings.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    keyword: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    label: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    value: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    required: {
      type: DataTypes.TINYINT,
      allowNull: false
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
    tableName: 'payment_settings',
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
  return payment_settings;
  }
}
