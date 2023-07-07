import Sequelize, { DataTypes, Model, Optional } from 'sequelize';

export interface error_logsAttributes {
  id: number;
  userId?: number;
  user_list_id?: number;
  action: string;
  error: string;
  date: string;
  created_at?: Date;
  updated_at?: Date;
}

export type error_logsPk = "id";
export type error_logsId = error_logs[error_logsPk];
export type error_logsCreationAttributes = Optional<error_logsAttributes, error_logsPk>;

export class error_logs extends Model<error_logsAttributes, error_logsCreationAttributes> implements error_logsAttributes {
  id!: number;
  userId?: number;
  user_list_id?: number;
  action!: string;
  error!: string;
  date!: string;
  created_at?: Date;
  updated_at?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof error_logs {
    error_logs.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    user_list_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    action: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    error: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    date: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'error_logs',
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
  return error_logs;
  }
}
