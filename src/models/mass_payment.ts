import Sequelize, { DataTypes, Model, Optional } from 'sequelize';

export interface mass_paymentAttributes {
  id: number;
  url: string;
  total_mass_payment_items?: number;
  dwolla_mass_payment_result?: string;
  created_at: Date;
  updated_at: Date;
  correlation_id: string;
  start_process_date?: Date;
  end_process_date?: Date;
  status: string;
  total: number;
}

export type mass_paymentPk = "id";
export type mass_paymentId = mass_payment[mass_paymentPk];
export type mass_paymentCreationAttributes = Optional<mass_paymentAttributes, mass_paymentPk>;

export class mass_payment extends Model<mass_paymentAttributes, mass_paymentCreationAttributes> implements mass_paymentAttributes {
  id!: number;
  url!: string;
  total_mass_payment_items?: number;
  dwolla_mass_payment_result?: string;
  created_at!: Date;
  updated_at!: Date;
  correlation_id!: string;
  start_process_date?: Date;
  end_process_date?: Date;
  status!: string;
  total!: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof mass_payment {
    mass_payment.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    url: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    total_mass_payment_items: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    dwolla_mass_payment_result: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
    correlation_id: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    start_process_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    end_process_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    status: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    total: {
      type: DataTypes.DOUBLE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'mass_payment',
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
  return mass_payment;
  }
}
