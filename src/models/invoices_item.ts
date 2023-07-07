import Sequelize, { DataTypes, Model, Optional } from 'sequelize';
import type { invoices, invoicesId } from './invoices';

export interface invoices_itemAttributes {
  id: number;
  invoice_id?: number;
  description?: string;
  quantity?: number;
  tax?: number;
  unit_price?: number;
  amount?: number;
  created_at: Date;
  updated_at: Date;
}

export type invoices_itemPk = "id";
export type invoices_itemId = invoices_item[invoices_itemPk];
export type invoices_itemCreationAttributes = Optional<invoices_itemAttributes, invoices_itemPk>;

export class invoices_item extends Model<invoices_itemAttributes, invoices_itemCreationAttributes> implements invoices_itemAttributes {
  id!: number;
  invoice_id?: number;
  description?: string;
  quantity?: number;
  tax?: number;
  unit_price?: number;
  amount?: number;
  created_at!: Date;
  updated_at!: Date;

  // invoices_item belongsTo invoices via invoice_id
  invoice!: invoices;
  getInvoice!: Sequelize.BelongsToGetAssociationMixin<invoices>;
  setInvoice!: Sequelize.BelongsToSetAssociationMixin<invoices, invoicesId>;
  createInvoice!: Sequelize.BelongsToCreateAssociationMixin<invoices>;

  static initModel(sequelize: Sequelize.Sequelize): typeof invoices_item {
    invoices_item.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    invoice_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'invoices',
        key: 'id'
      }
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tax: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    unit_price: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    amount: {
      type: DataTypes.DOUBLE,
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
    tableName: 'invoices_item',
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
        name: "IDX_F8AC0FD2989F1FD",
        using: "BTREE",
        fields: [
          { name: "invoice_id" },
        ]
      },
    ]
  });
  return invoices_item;
  }
}
