import Sequelize, { DataTypes, Model, Optional } from 'sequelize';
import type { titles, titlesId } from './titles';

export interface customerAttributes {
  id: number;
  name?: string;
  file_number?: string;
  email?: string;
  company_name?: string;
  company_file_number?: string;
  created_at: Date;
  updated_at: Date;
  address?: string;
}

export type customerPk = "id";
export type customerId = customer[customerPk];
export type customerCreationAttributes = Optional<customerAttributes, customerPk>;

export class customer extends Model<customerAttributes, customerCreationAttributes> implements customerAttributes {
  id!: number;
  name?: string;
  file_number?: string;
  email?: string;
  company_name?: string;
  company_file_number?: string;
  created_at!: Date;
  updated_at!: Date;
  address?: string;

  // customer hasMany titles via customer_id
  titles!: titles[];
  getTitles!: Sequelize.HasManyGetAssociationsMixin<titles>;
  setTitles!: Sequelize.HasManySetAssociationsMixin<titles, titlesId>;
  addTitle!: Sequelize.HasManyAddAssociationMixin<titles, titlesId>;
  addTitles!: Sequelize.HasManyAddAssociationsMixin<titles, titlesId>;
  createTitle!: Sequelize.HasManyCreateAssociationMixin<titles>;
  removeTitle!: Sequelize.HasManyRemoveAssociationMixin<titles, titlesId>;
  removeTitles!: Sequelize.HasManyRemoveAssociationsMixin<titles, titlesId>;
  hasTitle!: Sequelize.HasManyHasAssociationMixin<titles, titlesId>;
  hasTitles!: Sequelize.HasManyHasAssociationsMixin<titles, titlesId>;
  countTitles!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof customer {
    customer.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    file_number: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    company_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    company_file_number: {
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
    address: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'customer',
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
  return customer;
  }
}
