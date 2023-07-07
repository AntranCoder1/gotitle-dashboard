import Sequelize, { DataTypes, Model, Optional } from 'sequelize';
import type { titles, titlesId } from './titles';

export interface title_sellersAttributes {
  id: number;
  title_id?: number;
  name?: string;
  created_at: Date;
  updated_at: Date;
}

export type title_sellersPk = "id";
export type title_sellersId = title_sellers[title_sellersPk];
export type title_sellersCreationAttributes = Optional<title_sellersAttributes, title_sellersPk>;

export class title_sellers extends Model<title_sellersAttributes, title_sellersCreationAttributes> implements title_sellersAttributes {
  id!: number;
  title_id?: number;
  name?: string;
  created_at!: Date;
  updated_at!: Date;

  // title_sellers belongsTo titles via title_id
  title!: titles;
  getTitle!: Sequelize.BelongsToGetAssociationMixin<titles>;
  setTitle!: Sequelize.BelongsToSetAssociationMixin<titles, titlesId>;
  createTitle!: Sequelize.BelongsToCreateAssociationMixin<titles>;

  static initModel(sequelize: Sequelize.Sequelize): typeof title_sellers {
    title_sellers.init({
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
    tableName: 'title_sellers',
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
        name: "IDX_ED825296A9F87BD",
        using: "BTREE",
        fields: [
          { name: "title_id" },
        ]
      },
    ]
  });
  return title_sellers;
  }
}
