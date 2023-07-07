import Sequelize, { DataTypes, Model, Optional } from 'sequelize';
import type { user_lists, user_listsId } from './user_lists';
import type { users, usersId } from './users';

export interface notificationsAttributes {
  id: number;
  user_id?: number;
  user_list_id?: number;
  description: string;
  url: string;
  created_at: Date;
  updated_at: Date;
}

export type notificationsPk = "id";
export type notificationsId = notifications[notificationsPk];
export type notificationsCreationAttributes = Optional<notificationsAttributes, notificationsPk>;

export class notifications extends Model<notificationsAttributes, notificationsCreationAttributes> implements notificationsAttributes {
  id!: number;
  user_id?: number;
  user_list_id?: number;
  description!: string;
  url!: string;
  created_at!: Date;
  updated_at!: Date;

  // notifications belongsTo user_lists via user_list_id
  user_list!: user_lists;
  getUser_list!: Sequelize.BelongsToGetAssociationMixin<user_lists>;
  setUser_list!: Sequelize.BelongsToSetAssociationMixin<user_lists, user_listsId>;
  createUser_list!: Sequelize.BelongsToCreateAssociationMixin<user_lists>;
  // notifications belongsTo users via user_id
  user!: users;
  getUser!: Sequelize.BelongsToGetAssociationMixin<users>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<users, usersId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<users>;

  static initModel(sequelize: Sequelize.Sequelize): typeof notifications {
    notifications.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    user_list_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'user_lists',
        key: 'id'
      }
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    url: {
      type: DataTypes.STRING(255),
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
    tableName: 'notifications',
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
      {
        name: "IDX_6000B0D3A76ED395",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "IDX_6000B0D3A76ED396",
        using: "BTREE",
        fields: [
          { name: "user_list_id" },
        ]
      },
    ]
  });
  return notifications;
  }
}
