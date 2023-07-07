import Sequelize, { DataTypes, Model, Optional } from "sequelize";
import type { invoices_item, invoices_itemId } from "./invoices_item";
import type { titles, titlesCreationAttributes, titlesId } from "./titles";
import type { users, usersId } from "./users";

export interface invoicesAttributes {
  id: number;
  user_id?: number;
  user_company_name?: string;
  user_name?: string;
  user_address?: string;
  client_name?: string;
  client_company_name?: string;
  client_address?: string;
  invoice_date?: string;
  due_date?: string;
  client_file_number?: string;
  client_company_file_number?: string;
  invoice_number?: number;
  total_amount?: number;
  created_at: Date;
  updated_at: Date;
  status?: string;
  client_email?: string;
}

export type invoicesPk = "id";
export type invoicesId = invoices[invoicesPk];
export type invoicesCreationAttributes = Optional<
  invoicesAttributes,
  invoicesPk
>;

export class invoices
  extends Model<invoicesAttributes, invoicesCreationAttributes>
  implements invoicesAttributes
{
  id!: number;
  user_id?: number;
  user_company_name?: string;
  user_name?: string;
  user_address?: string;
  client_name?: string;
  client_company_name?: string;
  client_address?: string;
  invoice_date?: string;
  due_date?: string;
  client_file_number?: string;
  client_company_file_number?: string;
  invoice_number?: number;
  total_amount?: number;
  created_at!: Date;
  updated_at!: Date;
  status?: string;
  client_email?: string;

  // invoices hasMany invoices_item via invoice_id
  invoices_items!: invoices_item[];
  getInvoices_items!: Sequelize.HasManyGetAssociationsMixin<invoices_item>;
  setInvoices_items!: Sequelize.HasManySetAssociationsMixin<
    invoices_item,
    invoices_itemId
  >;
  addInvoices_item!: Sequelize.HasManyAddAssociationMixin<
    invoices_item,
    invoices_itemId
  >;
  addInvoices_items!: Sequelize.HasManyAddAssociationsMixin<
    invoices_item,
    invoices_itemId
  >;
  createInvoices_item!: Sequelize.HasManyCreateAssociationMixin<invoices_item>;
  removeInvoices_item!: Sequelize.HasManyRemoveAssociationMixin<
    invoices_item,
    invoices_itemId
  >;
  removeInvoices_items!: Sequelize.HasManyRemoveAssociationsMixin<
    invoices_item,
    invoices_itemId
  >;
  hasInvoices_item!: Sequelize.HasManyHasAssociationMixin<
    invoices_item,
    invoices_itemId
  >;
  hasInvoices_items!: Sequelize.HasManyHasAssociationsMixin<
    invoices_item,
    invoices_itemId
  >;
  countInvoices_items!: Sequelize.HasManyCountAssociationsMixin;
  // invoices hasOne titles via invoice_id
  title!: titles;
  getTitle!: Sequelize.HasOneGetAssociationMixin<titles>;
  setTitle!: Sequelize.HasOneSetAssociationMixin<titles, titlesId>;
  // invoices belongsTo users via user_id
  user!: users;
  getUser!: Sequelize.BelongsToGetAssociationMixin<users>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<users, usersId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<users>;

  static initModel(sequelize: Sequelize.Sequelize): typeof invoices {
    invoices.init(
      {
        id: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
        },
        user_id: {
          type: DataTypes.INTEGER,
          allowNull: true,
          references: {
            model: "users",
            key: "id",
          },
        },
        user_company_name: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        user_name: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        user_address: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        client_name: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        client_company_name: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        client_address: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        invoice_date: {
          type: DataTypes.DATEONLY,
          allowNull: true,
        },
        due_date: {
          type: DataTypes.DATEONLY,
          allowNull: true,
        },
        client_file_number: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        client_company_file_number: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        invoice_number: {
          type: DataTypes.INTEGER,
          allowNull: true,
        },
        total_amount: {
          type: DataTypes.DOUBLE,
          allowNull: true,
        },
        created_at: {
          type: DataTypes.DATE,
          allowNull: false,
        },
        updated_at: {
          type: DataTypes.DATE,
          allowNull: false,
        },
        status: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        client_email: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
      },
      {
        sequelize,
        tableName: "invoices",
        timestamps: false,
        indexes: [
          {
            name: "PRIMARY",
            unique: true,
            using: "BTREE",
            fields: [{ name: "id" }],
          },
          {
            name: "IDX_6A2F2F95A76ED395",
            using: "BTREE",
            fields: [{ name: "user_id" }],
          },
        ],
      }
    );
    return invoices;
  }
}
