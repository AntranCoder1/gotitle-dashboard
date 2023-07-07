import Sequelize, { DataTypes, Model, Optional } from 'sequelize';

export interface sessionsAttributes {
  id: string;
  user_id?: number;
  user_list_id: number;
  ip_address?: string;
  user_agent?: string;
  payload: string;
  last_activity: number;
}

export type sessionsPk = "id";
export type sessionsId = sessions[sessionsPk];
export type sessionsCreationAttributes = Optional<sessionsAttributes, sessionsPk>;

export class sessions extends Model<sessionsAttributes, sessionsCreationAttributes> implements sessionsAttributes {
  id!: string;
  user_id?: number;
  user_list_id!: number;
  ip_address?: string;
  user_agent?: string;
  payload!: string;
  last_activity!: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof sessions {
    sessions.init({
    id: {
      type: DataTypes.STRING(191),
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    user_list_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ip_address: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    user_agent: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    payload: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    last_activity: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'sessions',
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
  return sessions;
  }
}
