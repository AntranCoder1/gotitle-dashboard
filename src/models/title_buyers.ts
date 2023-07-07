import Sequelize, { DataTypes, Model, Optional } from 'sequelize';
import type { titles, titlesId } from './titles';

export interface title_buyersAttributes {
  id: number;
  title_id?: number;
  name?: string;
  created_at: Date;
  updated_at: Date;
}

export type title_buyersPk = "id";
export type title_buyersId = title_buyers[title_buyersPk];
export type title_buyersCreationAttributes = Optional<title_buyersAttributes, title_buyersPk>;

export class title_buyers extends Model<title_buyersAttributes, title_buyersCreationAttributes> implements title_buyersAttributes {
  id!: number;
  title_id?: number;
  name?: string;
  created_at!: Date;
  updated_at!: Date;

  // title_buyers belongsTo titles via title_id
  title!: titles;
  getTitle!: Sequelize.BelongsToGetAssociationMixin<titles>;
  setTitle!: Sequelize.BelongsToSetAssociationMixin<titles, titlesId>;
  createTitle!: Sequelize.BelongsToCreateAssociationMixin<titles>;

  static initModel(sequelize: Sequelize.Sequelize): typeof title_buyers {
    title_buyers.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    title_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'titles',
        key: 'id'
      }
    },
    name: {
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
    tableName: 'title_buyers',
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
        name: "IDX_8743A84BA9F87BD",
        using: "BTREE",
        fields: [
          { name: "title_id" },
        ]
      },
    ]
  });
  return title_buyers;
  }
}
