import Sequelize, { DataTypes, Model, Optional } from 'sequelize';
import type { bought_titles, bought_titlesId } from './bought_titles';
import type { orders, ordersId } from './orders';

export interface guestsAttributes {
  id: number;
  firstname?: string;
  lastname?: string;
  email?: string;
  created_at: Date;
  updated_at: Date;
}

export type guestsPk = "id";
export type guestsId = guests[guestsPk];
export type guestsCreationAttributes = Optional<guestsAttributes, guestsPk>;

export class guests extends Model<guestsAttributes, guestsCreationAttributes> implements guestsAttributes {
  id!: number;
  firstname?: string;
  lastname?: string;
  email?: string;
  created_at!: Date;
  updated_at!: Date;

  // guests hasMany bought_titles via guest_id
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
  // guests hasMany orders via guest_id
  orders!: orders[];
  getOrders!: Sequelize.HasManyGetAssociationsMixin<orders>;
  setOrders!: Sequelize.HasManySetAssociationsMixin<orders, ordersId>;
  addOrder!: Sequelize.HasManyAddAssociationMixin<orders, ordersId>;
  addOrders!: Sequelize.HasManyAddAssociationsMixin<orders, ordersId>;
  createOrder!: Sequelize.HasManyCreateAssociationMixin<orders>;
  removeOrder!: Sequelize.HasManyRemoveAssociationMixin<orders, ordersId>;
  removeOrders!: Sequelize.HasManyRemoveAssociationsMixin<orders, ordersId>;
  hasOrder!: Sequelize.HasManyHasAssociationMixin<orders, ordersId>;
  hasOrders!: Sequelize.HasManyHasAssociationsMixin<orders, ordersId>;
  countOrders!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof guests {
    guests.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    firstname: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    lastname: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    email: {
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
    tableName: 'guests',
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
  return guests;
  }
}
