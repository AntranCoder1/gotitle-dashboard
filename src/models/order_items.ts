import Sequelize, { DataTypes, Model, Optional } from 'sequelize';
import type { bought_titles, bought_titlesId } from './bought_titles';
import type { orders, ordersId } from './orders';
import type { payment, paymentId } from './payment';
import type { user_lists, user_listsId } from './user_lists';
import type { users, usersId } from './users';

export interface order_itemsAttributes {
  id: number;
  order_id?: number;
  description?: string;
  meta_data?: string;
  type?: string;
  unit_price: number;
  quantity: number;
  total: number;
  created_at: Date;
  updated_at: Date;
  beneficiary_id?: number;
  beneficiary_list_id?: number;
  status: string;
  payment_id?: number;
  applied_fee: number;
  applied_tax: number;
  role_fee: number;
}

export type order_itemsPk = "id";
export type order_itemsId = order_items[order_itemsPk];
export type order_itemsCreationAttributes = Optional<order_itemsAttributes, order_itemsPk>;

export class order_items extends Model<order_itemsAttributes, order_itemsCreationAttributes> implements order_itemsAttributes {
  id!: number;
  order_id?: number;
  description?: string;
  meta_data?: string;
  type?: string;
  unit_price!: number;
  quantity!: number;
  total!: number;
  created_at!: Date;
  updated_at!: Date;
  beneficiary_id?: number;
  beneficiary_list_id?: number;
  status!: string;
  payment_id?: number;
  applied_fee!: number;
  applied_tax!: number;
  role_fee!: number;

  // order_items hasMany bought_titles via order_item_id
  bought_titles!: bought_titles[];
  getBought_titles!: Sequelize.HasManyGetAssociationsMixin<bought_titles>;
  setBought_titles!: Sequelize.HasManySetAssociationsMixin<bought_titles, bought_titlesId>;
  addBought_title!: Sequelize.HasManyAddAssociationMixin<bought_titles, bought_titlesId>;
  addBought_titles!: Sequelize.HasManyAddAssociationsMixin<bought_titles, bought_titlesId>;
  createBought_title!: Sequelize.HasManyCreateAssociationMixin<bought_titles>;
  removeBought_title!: Sequelize.HasManyRemoveAssociationMixin<bought_titles, bought_titlesId>;
  removeBought_titles!: Sequelize.HasManyRemoveAssociationsMixin<bought_titles, bought_titlesId>;
  hasBought_title!: Sequelize.HasManyHasAssociationMixin<bought_titles, bought_titlesId>;
  hasBought_titles!: Sequelize.HasManyHasAssociationsMixin<bought_titles, bought_titlesId>;
  countBought_titles!: Sequelize.HasManyCountAssociationsMixin;
  // order_items belongsTo orders via order_id
  order!: orders;
  getOrder!: Sequelize.BelongsToGetAssociationMixin<orders>;
  setOrder!: Sequelize.BelongsToSetAssociationMixin<orders, ordersId>;
  createOrder!: Sequelize.BelongsToCreateAssociationMixin<orders>;
  // order_items belongsTo payment via payment_id
  payment!: payment;
  getPayment!: Sequelize.BelongsToGetAssociationMixin<payment>;
  setPayment!: Sequelize.BelongsToSetAssociationMixin<payment, paymentId>;
  createPayment!: Sequelize.BelongsToCreateAssociationMixin<payment>;
  // order_items belongsTo user_lists via beneficiary_list_id
  beneficiary_list!: user_lists;
  getBeneficiary_list!: Sequelize.BelongsToGetAssociationMixin<user_lists>;
  setBeneficiary_list!: Sequelize.BelongsToSetAssociationMixin<user_lists, user_listsId>;
  createBeneficiary_list!: Sequelize.BelongsToCreateAssociationMixin<user_lists>;
  // order_items belongsTo users via beneficiary_id
  beneficiary!: users;
  getBeneficiary!: Sequelize.BelongsToGetAssociationMixin<users>;
  setBeneficiary!: Sequelize.BelongsToSetAssociationMixin<users, usersId>;
  createBeneficiary!: Sequelize.BelongsToCreateAssociationMixin<users>;

  static initModel(sequelize: Sequelize.Sequelize): typeof order_items {
    order_items.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'orders',
        key: 'id'
      }
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    meta_data: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "(DC2Type:json)"
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    unit_price: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    quantity: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    total: {
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
    beneficiary_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    beneficiary_list_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'user_lists',
        key: 'id'
      }
    },
    status: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "unpaid"
    },
    payment_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'payment',
        key: 'id'
      }
    },
    applied_fee: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    applied_tax: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    role_fee: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'order_items',
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
        name: "IDX_62809DB08D9F6D38",
        using: "BTREE",
        fields: [
          { name: "order_id" },
        ]
      },
      {
        name: "IDX_62809DB0ECCAAFA0",
        using: "BTREE",
        fields: [
          { name: "beneficiary_id" },
        ]
      },
      {
        name: "IDX_62809DB0ECCAAFA1",
        using: "BTREE",
        fields: [
          { name: "beneficiary_list_id" },
        ]
      },
      {
        name: "IDX_62809DB04C3A3BB",
        using: "BTREE",
        fields: [
          { name: "payment_id" },
        ]
      },
    ]
  });
  return order_items;
  }
}
