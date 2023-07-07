import Sequelize, { DataTypes, Model, Optional } from 'sequelize';
import type { db_images, db_imagesId } from './db_images';
import type { deed_types, deed_typesId } from './deed_types';
import type { liens_db_images, liens_db_imagesId } from './liens_db_images';
import type { titles, titlesId } from './titles';

export interface liensAttributes {
  id: number;
  title_id?: number;
  lienor?: string;
  debtor?: string;
  book?: string;
  page?: string;
  amount?: string;
  deed_list?: string;
  transfer_list?: string;
  created_at: Date;
  updated_at: Date;
  lien_type_id?: number;
  master_document_id?: number;
  deed_type_id?: number;
  assigned_transferred?: string;
  sell_in_virtual_vault: number;
  publish: number;
  price?: number;
  position?: number;
}

export type liensPk = "id";
export type liensId = liens[liensPk];
export type liensCreationAttributes = Optional<liensAttributes, liensPk>;

export class liens extends Model<liensAttributes, liensCreationAttributes> implements liensAttributes {
  id!: number;
  title_id?: number;
  lienor?: string;
  debtor?: string;
  book?: string;
  page?: string;
  amount?: string;
  deed_list?: string;
  transfer_list?: string;
  created_at!: Date;
  updated_at!: Date;
  lien_type_id?: number;
  master_document_id?: number;
  deed_type_id?: number;
  assigned_transferred?: string;
  sell_in_virtual_vault!: number;
  publish!: number;
  price?: number;
  position?: number;

  // liens belongsTo deed_types via deed_type_id
  deed_type!: deed_types;
  getDeed_type!: Sequelize.BelongsToGetAssociationMixin<deed_types>;
  setDeed_type!: Sequelize.BelongsToSetAssociationMixin<deed_types, deed_typesId>;
  createDeed_type!: Sequelize.BelongsToCreateAssociationMixin<deed_types>;
  // liens belongsToMany db_images via lien_id and db_image_id
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
  // liens belongsTo liens via master_document_id
  master_document!: liens;
  getMaster_document!: Sequelize.BelongsToGetAssociationMixin<liens>;
  setMaster_document!: Sequelize.BelongsToSetAssociationMixin<liens, liensId>;
  createMaster_document!: Sequelize.BelongsToCreateAssociationMixin<liens>;
  // liens hasMany liens_db_images via lien_id
  liens_db_images!: liens_db_images[];
  getLiens_db_images!: Sequelize.HasManyGetAssociationsMixin<liens_db_images>;
  setLiens_db_images!: Sequelize.HasManySetAssociationsMixin<liens_db_images, liens_db_imagesId>;
  addLiens_db_image!: Sequelize.HasManyAddAssociationMixin<liens_db_images, liens_db_imagesId>;
  addLiens_db_images!: Sequelize.HasManyAddAssociationsMixin<liens_db_images, liens_db_imagesId>;
  createLiens_db_image!: Sequelize.HasManyCreateAssociationMixin<liens_db_images>;
  removeLiens_db_image!: Sequelize.HasManyRemoveAssociationMixin<liens_db_images, liens_db_imagesId>;
  removeLiens_db_images!: Sequelize.HasManyRemoveAssociationsMixin<liens_db_images, liens_db_imagesId>;
  hasLiens_db_image!: Sequelize.HasManyHasAssociationMixin<liens_db_images, liens_db_imagesId>;
  hasLiens_db_images!: Sequelize.HasManyHasAssociationsMixin<liens_db_images, liens_db_imagesId>;
  countLiens_db_images!: Sequelize.HasManyCountAssociationsMixin;
  // liens belongsTo titles via title_id
  title!: titles;
  getTitle!: Sequelize.BelongsToGetAssociationMixin<titles>;
  setTitle!: Sequelize.BelongsToSetAssociationMixin<titles, titlesId>;
  createTitle!: Sequelize.BelongsToCreateAssociationMixin<titles>;

  static initModel(sequelize: Sequelize.Sequelize): typeof liens {
    liens.init({
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
    lienor: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    debtor: {
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
    amount: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    deed_list: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    transfer_list: {
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
    lien_type_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    master_document_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'liens',
        key: 'id'
      }
    },
    deed_type_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'deed_types',
        key: 'id'
      }
    },
    assigned_transferred: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    sell_in_virtual_vault: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    publish: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    price: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    position: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'liens',
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
        name: "IDX_A0A0BABCA9F87BD",
        using: "BTREE",
        fields: [
          { name: "title_id" },
        ]
      },
      {
        name: "IDX_A0A0BABCC937C8B2",
        using: "BTREE",
        fields: [
          { name: "master_document_id" },
        ]
      },
      {
        name: "IDX_A0A0BABC93650679",
        using: "BTREE",
        fields: [
          { name: "deed_type_id" },
        ]
      },
    ]
  });
  return liens;
  }
}
