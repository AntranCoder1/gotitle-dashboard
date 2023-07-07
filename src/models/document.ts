import Sequelize, { DataTypes, Model, Optional } from 'sequelize';
import type { bought_titles, bought_titlesId } from './bought_titles';
import type { titles, titlesId } from './titles';

export interface documentAttributes {
  id: number;
  title_id?: number;
  status?: string;
  date_on?: string;
  pdf?: string;
  bought_title_id?: number;
  document_id?: number;
  document_type?: string;
}

export type documentPk = "id";
export type documentId = document[documentPk];
export type documentCreationAttributes = Optional<documentAttributes, documentPk>;

export class document extends Model<documentAttributes, documentCreationAttributes> implements documentAttributes {
  id!: number;
  title_id?: number;
  status?: string;
  date_on?: string;
  pdf?: string;
  bought_title_id?: number;
  document_id?: number;
  document_type?: string;

  // document belongsTo bought_titles via bought_title_id
  bought_title!: bought_titles;
  getBought_title!: Sequelize.BelongsToGetAssociationMixin<bought_titles>;
  setBought_title!: Sequelize.BelongsToSetAssociationMixin<bought_titles, bought_titlesId>;
  createBought_title!: Sequelize.BelongsToCreateAssociationMixin<bought_titles>;
  // document belongsTo titles via title_id
  title!: titles;
  getTitle!: Sequelize.BelongsToGetAssociationMixin<titles>;
  setTitle!: Sequelize.BelongsToSetAssociationMixin<titles, titlesId>;
  createTitle!: Sequelize.BelongsToCreateAssociationMixin<titles>;

  static initModel(sequelize: Sequelize.Sequelize): typeof document {
    document.init({
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
    status: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    date_on: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    pdf: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    bought_title_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'bought_titles',
        key: 'id'
      }
    },
    document_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    document_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'document',
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
        name: "IDX_D8698A76A9F87BD",
        using: "BTREE",
        fields: [
          { name: "title_id" },
        ]
      },
      {
        name: "IDX_D8698A76CBD002B6",
        using: "BTREE",
        fields: [
          { name: "bought_title_id" },
        ]
      },
    ]
  });
  return document;
  }
}
