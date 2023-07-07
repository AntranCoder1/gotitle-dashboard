import Sequelize, { DataTypes, Model, Optional } from 'sequelize';

export interface fee_settingAttributes {
  id: number;
  setting_key?: string;
  setting_value?: string;
  created_at: Date;
  updated_at: Date;
}

export type fee_settingPk = "id";
export type fee_settingId = fee_setting[fee_settingPk];
export type fee_settingCreationAttributes = Optional<fee_settingAttributes, fee_settingPk>;

export class fee_setting extends Model<fee_settingAttributes, fee_settingCreationAttributes> implements fee_settingAttributes {
  id!: number;
  setting_key?: string;
  setting_value?: string;
  created_at!: Date;
  updated_at!: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof fee_setting {
    fee_setting.init({
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
    tableName: 'fee_setting',
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
  return fee_setting;
  }
}
