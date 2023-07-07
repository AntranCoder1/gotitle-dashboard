import Sequelize, { DataTypes, Model, Optional } from 'sequelize';
import type { db_images, db_imagesId } from './db_images';
import type { deed_types, deed_typesId } from './deed_types';
import type { misc_civil_probates_db_images, misc_civil_probates_db_imagesId } from './misc_civil_probates_db_images';
import type { titles, titlesId } from './titles';

export interface misc_civil_probatesAttributes {
  id: number;
  deed_type_id?: number;
  title_id?: number;
  instrument_type?: string;
  file_number?: string;
  book_type?: string;
  book?: string;
  page?: string;
  note?: string;
  created_at: Date;
  updated_at: Date;
  position?: number;
}

export type misc_civil_probatesPk = "id";
export type misc_civil_probatesId = misc_civil_probates[misc_civil_probatesPk];
export type misc_civil_probatesCreationAttributes = Optional<misc_civil_probatesAttributes, misc_civil_probatesPk>;

export class misc_civil_probates extends Model<misc_civil_probatesAttributes, misc_civil_probatesCreationAttributes> implements misc_civil_probatesAttributes {
  id!: number;
  deed_type_id?: number;
  title_id?: number;
  instrument_type?: string;
  file_number?: string;
  book_type?: string;
  book?: string;
  page?: string;
  note?: string;
  created_at!: Date;
  updated_at!: Date;
  position?: number;

  // misc_civil_probates belongsTo deed_types via deed_type_id
  deed_type!: deed_types;
  getDeed_type!: Sequelize.BelongsToGetAssociationMixin<deed_types>;
  setDeed_type!: Sequelize.BelongsToSetAssociationMixin<deed_types, deed_typesId>;
  createDeed_type!: Sequelize.BelongsToCreateAssociationMixin<deed_types>;
  // misc_civil_probates belongsToMany db_images via misc_civil_probate_id and db_image_id
  db_images!: db_images[];
  getDb_images!: Sequelize.BelongsToManyGetAssociationsMixin<db_images>;
  setDb_images!: Sequelize.BelongsToManySetAssociationsMixin<db_images, db_imagesId>;
  addDb_image!: Sequelize.BelongsToManyAddAssociationMixin<db_images, db_imagesId>;
  addDb_images!: Sequelize.BelongsToManyAddAssociationsMixin<db_images, db_imagesId>;
  createDb_image!: Sequelize.BelongsToManyCreateAssociationMixin<db_images>;
  removeDb_image!: Sequelize.BelongsToManyRemoveAssociationMixin<db_images, db_imagesId>;
  removeDb_images!: Sequelize.BelongsToManyRemoveAssociationsMixin<db_images, db_imagesId>;
  hasDb_image!: Sequelize.BelongsToManyHasAssociationMixin<db_images, db_imagesId>;
  hasDb_images!: Sequelize.BelongsToManyHasAssociationsMixin<db_images, db_imagesId>;
  countDb_images!: Sequelize.BelongsToManyCountAssociationsMixin;
  // misc_civil_probates hasMany misc_civil_probates_db_images via misc_civil_probate_id
  misc_civil_probates_db_images!: misc_civil_probates_db_images[];
  getMisc_civil_probates_db_images!: Sequelize.HasManyGetAssociationsMixin<misc_civil_probates_db_images>;
  setMisc_civil_probates_db_images!: Sequelize.HasManySetAssociationsMixin<misc_civil_probates_db_images, misc_civil_probates_db_imagesId>;
  addMisc_civil_probates_db_image!: Sequelize.HasManyAddAssociationMixin<misc_civil_probates_db_images, misc_civil_probates_db_imagesId>;
  addMisc_civil_probates_db_images!: Sequelize.HasManyAddAssociationsMixin<misc_civil_probates_db_images, misc_civil_probates_db_imagesId>;
  createMisc_civil_probates_db_image!: Sequelize.HasManyCreateAssociationMixin<misc_civil_probates_db_images>;
  removeMisc_civil_probates_db_image!: Sequelize.HasManyRemoveAssociationMixin<misc_civil_probates_db_images, misc_civil_probates_db_imagesId>;
  removeMisc_civil_probates_db_images!: Sequelize.HasManyRemoveAssociationsMixin<misc_civil_probates_db_images, misc_civil_probates_db_imagesId>;
  hasMisc_civil_probates_db_image!: Sequelize.HasManyHasAssociationMixin<misc_civil_probates_db_images, misc_civil_probates_db_imagesId>;
  hasMisc_civil_probates_db_images!: Sequelize.HasManyHasAssociationsMixin<misc_civil_probates_db_images, misc_civil_probates_db_imagesId>;
  countMisc_civil_probates_db_images!: Sequelize.HasManyCountAssociationsMixin;
  // misc_civil_probates belongsTo titles via title_id
  title!: titles;
  getTitle!: Sequelize.BelongsToGetAssociationMixin<titles>;
  setTitle!: Sequelize.BelongsToSetAssociationMixin<titles, titlesId>;
  createTitle!: Sequelize.BelongsToCreateAssociationMixin<titles>;

  static initModel(sequelize: Sequelize.Sequelize): typeof misc_civil_probates {
    misc_civil_probates.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    deed_type_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'deed_types',
        key: 'id'
      }
    },
    title_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'titles',
        key: 'id'
      }
    },
    instrument_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    file_number: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    book_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    book: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    page: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    note: {
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
    position: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'misc_civil_probates',
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
        name: "IDX_57C622F693650679",
        using: "BTREE",
        fields: [
          { name: "deed_type_id" },
        ]
      },
      {
        name: "IDX_57C622F6A9F87BD",
        using: "BTREE",
        fields: [
          { name: "title_id" },
        ]
      },
    ]
  });
  return misc_civil_probates;
  }
}
