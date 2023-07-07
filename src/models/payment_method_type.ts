import Sequelize, { DataTypes, Model, Optional } from 'sequelize';
import type { payment_method, payment_methodId } from './payment_method';

export interface payment_method_typeAttributes {
  id: number;
  name?: string;
  description?: string;
  method_usage?: string;
  created_at: Date;
  updated_at: Date;
}

export type payment_method_typePk = "id";
export type payment_method_typeId = payment_method_type[payment_method_typePk];
export type payment_method_typeCreationAttributes = Optional<payment_method_typeAttributes, payment_method_typePk>;

export class payment_method_type extends Model<payment_method_typeAttributes, payment_method_typeCreationAttributes> implements payment_method_typeAttributes {
  id!: number;
  name?: string;
  description?: string;
  method_usage?: string;
  created_at!: Date;
  updated_at!: Date;

  // payment_method_type hasMany payment_method via payment_method_type_id
  payment_methods!: payment_method[];
  getPayment_methods!: Sequelize.HasManyGetAssociationsMixin<payment_method>;
  setPayment_methods!: Sequelize.HasManySetAssociationsMixin<payment_method, payment_methodId>;
  addPayment_method!: Sequelize.HasManyAddAssociationMixin<payment_method, payment_methodId>;
  addPayment_methods!: Sequelize.HasManyAddAssociationsMixin<payment_method, payment_methodId>;
  createPayment_method!: Sequelize.HasManyCreateAssociationMixin<payment_method>;
  removePayment_method!: Sequelize.HasManyRemoveAssociationMixin<payment_method, payment_methodId>;
  removePayment_methods!: Sequelize.HasManyRemoveAssociationsMixin<payment_method, payment_methodId>;
  hasPayment_method!: Sequelize.HasManyHasAssociationMixin<payment_method, payment_methodId>;
  hasPayment_methods!: Sequelize.HasManyHasAssociationsMixin<payment_method, payment_methodId>;
  countPayment_methods!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof payment_method_type {
    payment_method_type.init({
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
    description: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    method_usage: {
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
    tableName: 'payment_method_type',
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
  return payment_method_type;
  }
}
