import Sequelize, { DataTypes, Model, Optional } from 'sequelize';
import type { payment, paymentId } from './payment';

export interface payment_eventAttributes {
  id: number;
  payment_id?: number;
  attachment?: string;
  message?: string;
  notes?: string;
  previous_status?: string;
  actual_status?: string;
  event_date?: string;
  created_at: Date;
  updated_at: Date;
}

export type payment_eventPk = "id";
export type payment_eventId = payment_event[payment_eventPk];
export type payment_eventCreationAttributes = Optional<payment_eventAttributes, payment_eventPk>;

export class payment_event extends Model<payment_eventAttributes, payment_eventCreationAttributes> implements payment_eventAttributes {
  id!: number;
  payment_id?: number;
  attachment?: string;
  message?: string;
  notes?: string;
  previous_status?: string;
  actual_status?: string;
  event_date?: string;
  created_at!: Date;
  updated_at!: Date;

  // payment_event belongsTo payment via payment_id
  payment!: payment;
  getPayment!: Sequelize.BelongsToGetAssociationMixin<payment>;
  setPayment!: Sequelize.BelongsToSetAssociationMixin<payment, paymentId>;
  createPayment!: Sequelize.BelongsToCreateAssociationMixin<payment>;

  static initModel(sequelize: Sequelize.Sequelize): typeof payment_event {
    payment_event.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    payment_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'payment',
        key: 'id'
      }
    },
    attachment: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    message: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    notes: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    previous_status: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    actual_status: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    event_date: {
      type: DataTypes.DATEONLY,
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
    tableName: 'payment_event',
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
        name: "IDX_6CE73C154C3A3BB",
        using: "BTREE",
        fields: [
          { name: "payment_id" },
        ]
      },
    ]
  });
  return payment_event;
  }
}
