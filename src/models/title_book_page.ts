import Sequelize, { DataTypes, Model, Optional } from 'sequelize';
import type { titles, titlesId } from './titles';

export interface title_book_pageAttributes {
  id: number;
  title_id?: number;
  book?: string;
  page?: string;
  without_book_page_info?: string;
  type?: string;
  created_at: Date;
  updated_at: Date;
}

export type title_book_pagePk = "id";
export type title_book_pageId = title_book_page[title_book_pagePk];
export type title_book_pageCreationAttributes = Optional<title_book_pageAttributes, title_book_pagePk>;

export class title_book_page extends Model<title_book_pageAttributes, title_book_pageCreationAttributes> implements title_book_pageAttributes {
  id!: number;
  title_id?: number;
  book?: string;
  page?: string;
  without_book_page_info?: string;
  type?: string;
  created_at!: Date;
  updated_at!: Date;

  // title_book_page belongsTo titles via title_id
  title!: titles;
  getTitle!: Sequelize.BelongsToGetAssociationMixin<titles>;
  setTitle!: Sequelize.BelongsToSetAssociationMixin<titles, titlesId>;
  createTitle!: Sequelize.BelongsToCreateAssociationMixin<titles>;

  static initModel(sequelize: Sequelize.Sequelize): typeof title_book_page {
    title_book_page.init({
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
    book: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    page: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    without_book_page_info: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    type: {
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
    tableName: 'title_book_page',
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
        name: "IDX_AC6FF5E3A9F87BD",
        using: "BTREE",
        fields: [
          { name: "title_id" },
        ]
      },
    ]
  });
  return title_book_page;
  }
}
