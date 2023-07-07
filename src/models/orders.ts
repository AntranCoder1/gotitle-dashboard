import Sequelize, { DataTypes, Model, Optional } from 'sequelize';
import type { guests, guestsId } from './guests';
import type { order_items, order_itemsId } from './order_items';
import type { user_lists, user_listsId } from './user_lists';
import type { users, usersId } from './users';

export interface ordersAttributes {
  id: number;
  customer_id?: number;
  customer_list_id?: number;
  token: string;
  status: string;
  processed_date?: Date;
  gateway_id?: string;
  gateway_customer?: string;
  gateway_response?: string;
  total: number;
  sub_total: number;
  created_at: Date;
  updated_at: Date;
  guest_id?: number;
  fee_total: number;
}

export type ordersPk = "id";
export type ordersId = orders[ordersPk];
export type ordersCreationAttributes = Optional<ordersAttributes, ordersPk>;

export class orders extends Model<ordersAttributes, ordersCreationAttributes> implements ordersAttributes {
  id!: number;
  customer_id?: number;
  customer_list_id?: number;
  token!: string;
  status!: string;
  processed_date?: Date;
  gateway_id?: string;
  gateway_customer?: string;
  gateway_response?: string;
  total!: number;
  sub_total!: number;
  created_at!: Date;
  updated_at!: Date;
  guest_id?: number;
  fee_total!: number;

  // orders belongsTo guests via guest_id
  guest!: guests;
  getGuest!: Sequelize.BelongsToGetAssociationMixin<guests>;
  setGuest!: Sequelize.BelongsToSetAssociationMixin<guests, guestsId>;
  createGuest!: Sequelize.BelongsToCreateAssociationMixin<guests>;
  // orders hasMany order_items via order_id
  order_items!: order_items[];
  getOrder_items!: Sequelize.HasManyGetAssociationsMixin<order_items>;
  setOrder_items!: Sequelize.HasManySetAssociationsMixin<order_items, order_itemsId>;
  addOrder_item!: Sequelize.HasManyAddAssociationMixin<order_items, order_itemsId>;
  addOrder_items!: Sequelize.HasManyAddAssociationsMixin<order_items, order_itemsId>;
  createOrder_item!: Sequelize.HasManyCreateAssociationMixin<order_items>;
  removeOrder_item!: Sequelize.HasManyRemoveAssociationMixin<order_items, order_itemsId>;
  removeOrder_items!: Sequelize.HasManyRemoveAssociationsMixin<order_items, order_itemsId>;
  hasOrder_item!: Sequelize.HasManyHasAssociationMixin<order_items, order_itemsId>;
  hasOrder_items!: Sequelize.HasManyHasAssociationsMixin<order_items, order_itemsId>;
  countOrder_items!: Sequelize.HasManyCountAssociationsMixin;
  // orders belongsTo user_lists via customer_list_id
  customer_list!: user_lists;
  getCustomer_list!: Sequelize.BelongsToGetAssociationMixin<user_lists>;
  setCustomer_list!: Sequelize.BelongsToSetAssociationMixin<user_lists, user_listsId>;
  createCustomer_list!: Sequelize.BelongsToCreateAssociationMixin<user_lists>;
  // orders belongsTo users via customer_id
  customer!: users;
  getCustomer!: Sequelize.BelongsToGetAssociationMixin<users>;
  setCustomer!: Sequelize.BelongsToSetAssociationMixin<users, usersId>;
  createCustomer!: Sequelize.BelongsToCreateAssociationMixin<users>;

  static initModel(sequelize: Sequelize.Sequelize): typeof orders {
    orders.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    customer_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    customer_list_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'user_lists',
        key: 'id'
      }
    },
    token: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    status: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    processed_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    gateway_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    gateway_customer: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    gateway_response: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    total: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    sub_total: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
    guest_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'guests',
        key: 'id'
      }
    },
    fee_total: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'orders',
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
        name: "IDX_E52FFDEE9395C3F3",
        using: "BTREE",
        fields: [
          { name: "customer_id" },
        ]
      },
      {
        name: "IDX_E52FFDEE9395C3F4",
        using: "BTREE",
        fields: [
          { name: "customer_list_id" },
        ]
      },
      {
        name: "IDX_E52FFDEE9A4AA658",
        using: "BTREE",
        fields: [
          { name: "guest_id" },
        ]
      },
    ]
  });
  return orders;
  }
}
