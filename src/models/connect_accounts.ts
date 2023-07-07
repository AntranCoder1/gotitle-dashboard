import Sequelize, { DataTypes, Model, Optional } from 'sequelize';
import type { user_lists, user_listsId } from './user_lists';
import type { users, usersId } from './users';

export interface connect_accountsAttributes {
  id: number;
  user_id?: number;
  user_list_id?: number;
  connect_id?: string;
  created_at: Date;
  updated_at: Date;
}

export type connect_accountsPk = "id";
export type connect_accountsId = connect_accounts[connect_accountsPk];
export type connect_accountsCreationAttributes = Optional<connect_accountsAttributes, connect_accountsPk>;

export class connect_accounts extends Model<connect_accountsAttributes, connect_accountsCreationAttributes> implements connect_accountsAttributes {
  id!: number;
  user_id?: number;
  user_list_id?: number;
  connect_id?: string;
  created_at!: Date;
  updated_at!: Date;

  // connect_accounts belongsTo user_lists via user_list_id
  user_list!: user_lists;
  getUser_list!: Sequelize.BelongsToGetAssociationMixin<user_lists>;
  setUser_list!: Sequelize.BelongsToSetAssociationMixin<user_lists, user_listsId>;
  createUser_list!: Sequelize.BelongsToCreateAssociationMixin<user_lists>;
  // connect_accounts belongsTo users via user_id
  user!: users;
  getUser!: Sequelize.BelongsToGetAssociationMixin<users>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<users, usersId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<users>;

  static initModel(sequelize: Sequelize.Sequelize): typeof connect_accounts {
    connect_accounts.init({
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
      },
      unique: "FK_DDB3F9B8A76ED395"
    },
    user_list_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'user_lists',
        key: 'id'
      }
    },
    connect_id: {
      type: DataTypes.STRING(255),
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
    tableName: 'connect_accounts',
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
        name: "UNIQ_DDB3F9B8A76ED395",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "FK_DDB3F9B8A76ED396",
        using: "BTREE",
        fields: [
          { name: "user_list_id" },
        ]
      },
    ]
  });
  return connect_accounts;
  }
}
