import Sequelize, { DataTypes, Model, Optional } from 'sequelize';
import type { order_items, order_itemsId } from './order_items';
import type { payment_event, payment_eventId } from './payment_event';
import type { user_lists, user_listsId } from './user_lists';
import type { users, usersId } from './users';

export interface paymentAttributes {
  id: number;
  recipient_id: number;
  recipient_list_id: number;
  sub_total: number;
  tax: number;
  total: number;
  status: string;
  description?: string;
  type: string;
  created_at: Date;
  updated_at: Date;
  start_process_date: Date;
  end_process_date?: Date;
  correlation_id: string;
  fee: number;
  seller_payment_method?: string;
}

export type paymentPk = "id";
export type paymentId = payment[paymentPk];
export type paymentCreationAttributes = Optional<paymentAttributes, paymentPk>;

export class payment extends Model<paymentAttributes, paymentCreationAttributes> implements paymentAttributes {
  id!: number;
  recipient_id!: number;
  recipient_list_id!: number;
  sub_total!: number;
  tax!: number;
  total!: number;
  status!: string;
  description?: string;
  type!: string;
  created_at!: Date;
  updated_at!: Date;
  start_process_date!: Date;
  end_process_date?: Date;
  correlation_id!: string;
  fee!: number;
  seller_payment_method?: string;

  // payment hasMany order_items via payment_id
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
  // payment hasMany payment_event via payment_id
  payment_events!: payment_event[];
  getPayment_events!: Sequelize.HasManyGetAssociationsMixin<payment_event>;
  setPayment_events!: Sequelize.HasManySetAssociationsMixin<payment_event, payment_eventId>;
  addPayment_event!: Sequelize.HasManyAddAssociationMixin<payment_event, payment_eventId>;
  addPayment_events!: Sequelize.HasManyAddAssociationsMixin<payment_event, payment_eventId>;
  createPayment_event!: Sequelize.HasManyCreateAssociationMixin<payment_event>;
  removePayment_event!: Sequelize.HasManyRemoveAssociationMixin<payment_event, payment_eventId>;
  removePayment_events!: Sequelize.HasManyRemoveAssociationsMixin<payment_event, payment_eventId>;
  hasPayment_event!: Sequelize.HasManyHasAssociationMixin<payment_event, payment_eventId>;
  hasPayment_events!: Sequelize.HasManyHasAssociationsMixin<payment_event, payment_eventId>;
  countPayment_events!: Sequelize.HasManyCountAssociationsMixin;
  // payment belongsTo user_lists via recipient_list_id
  recipient_list!: user_lists;
  getRecipient_list!: Sequelize.BelongsToGetAssociationMixin<user_lists>;
  setRecipient_list!: Sequelize.BelongsToSetAssociationMixin<user_lists, user_listsId>;
  createRecipient_list!: Sequelize.BelongsToCreateAssociationMixin<user_lists>;
  // payment belongsTo users via recipient_id
  recipient!: users;
  getRecipient!: Sequelize.BelongsToGetAssociationMixin<users>;
  setRecipient!: Sequelize.BelongsToSetAssociationMixin<users, usersId>;
  createRecipient!: Sequelize.BelongsToCreateAssociationMixin<users>;

  static initModel(sequelize: Sequelize.Sequelize): typeof payment {
    payment.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    recipient_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    recipient_list_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user_lists',
        key: 'id'
      }
    },
    sub_total: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    tax: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    total: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    type: {
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
    },
    start_process_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    end_process_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    correlation_id: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    fee: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    seller_payment_method: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'payment',
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
        name: "IDX_6D28840DE92F8F78",
        using: "BTREE",
        fields: [
          { name: "recipient_id" },
        ]
      },
      {
        name: "IDX_6D28840DE92F8F79",
        using: "BTREE",
        fields: [
          { name: "recipient_list_id" },
        ]
      },
    ]
  });
  return payment;
  }
}
