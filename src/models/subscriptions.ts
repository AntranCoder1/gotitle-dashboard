import Sequelize, { DataTypes, Model, Optional } from 'sequelize';
import type { user_lists, user_listsId } from './user_lists';
import type { users, usersId } from './users';

export interface subscriptionsAttributes {
  id: number;
  user_id?: number;
  user_list_id?: number;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
  name: string;
  stripe_id: string;
  stripe_plan: string;
  quantity: number;
  trial_ends_at?: string;
  ends_at?: string;
}

export type subscriptionsPk = "id";
export type subscriptionsId = subscriptions[subscriptionsPk];
export type subscriptionsCreationAttributes = Optional<subscriptionsAttributes, subscriptionsPk>;

export class subscriptions extends Model<subscriptionsAttributes, subscriptionsCreationAttributes> implements subscriptionsAttributes {
  id!: number;
  user_id?: number;
  user_list_id?: number;
  created_at!: Date;
  updated_at!: Date;
  deleted_at?: Date;
  name!: string;
  stripe_id!: string;
  stripe_plan!: string;
  quantity!: number;
  trial_ends_at?: string;
  ends_at?: string;

  // subscriptions belongsTo user_lists via user_list_id
  user_list!: user_lists;
  getUser_list!: Sequelize.BelongsToGetAssociationMixin<user_lists>;
  setUser_list!: Sequelize.BelongsToSetAssociationMixin<user_lists, user_listsId>;
  createUser_list!: Sequelize.BelongsToCreateAssociationMixin<user_lists>;
  // subscriptions belongsTo users via user_id
  user!: users;
  getUser!: Sequelize.BelongsToGetAssociationMixin<users>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<users, usersId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<users>;

  static initModel(sequelize: Sequelize.Sequelize): typeof subscriptions {
    subscriptions.init({
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
    created_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
    deleted_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    stripe_id: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    stripe_plan: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    trial_ends_at: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    ends_at: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'subscriptions',
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
        name: "IDX_4778A01A76ED395",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "IDX_4778A01A76ED396",
        using: "BTREE",
        fields: [
          { name: "user_list_id" },
        ]
      },
    ]
  });
  return subscriptions;
  }
}
