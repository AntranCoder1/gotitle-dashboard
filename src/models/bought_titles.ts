import Sequelize, { DataTypes, Model, Optional } from "sequelize";
import type { document, documentId } from "./document";
import type { guests, guestsId } from "./guests";
import type { locations, locationsId } from "./locations";
import type { order_items, order_itemsId } from "./order_items";
import type { titles, titlesId } from "./titles";
import type { users, usersId } from "./users";

export interface bought_titlesAttributes {
  id: number;
  title_id?: number;
  date_search?: string;
  price?: number;
  documents?: string;
  created_at: Date;
  updated_at: Date;
  location_id?: number;
  location_name?: string;
  date_effective?: string;
  county?: string;
  district?: string;
  gmd?: string;
  land_lot?: string;
  section?: number;
  state_title?: string;
  type?: string;
  lot?: string;
  block?: string;
  phase?: string;
  pod?: string;
  unit?: string;
  long_legal?: string;
  plat_list?: string;
  chain_title_type?: string;
  township?: number;
  title_range?: number;
  zones?: string;
  note?: string;
  deed_list?: string;
  mortgage_list?: string;
  easement_list?: string;
  lien_list?: string;
  covenant?: string;
  apartment?: string;
  search_type?: string;
  search_type_detail?: string;
  search_type_detail_value?: string;
  condo_name?: string;
  subdivision_section?: string;
  interest_common?: string;
  parking?: string;
  garage?: string;
  storage?: string;
  wine?: string;
  floor_plan_list?: string;
  certified_by_user: number;
  owner_id?: number;
  order_item_id?: number;
  title_report?: string;
  guest_id?: number;
  plat_floor_plan_list?: string;
}

export type bought_titlesPk = "id";
export type bought_titlesId = bought_titles[bought_titlesPk];
export type bought_titlesCreationAttributes = Optional<
  bought_titlesAttributes,
  bought_titlesPk
>;

export class bought_titles
  extends Model<bought_titlesAttributes, bought_titlesCreationAttributes>
  implements bought_titlesAttributes
{
  id!: number;
  title_id?: number;
  date_search?: string;
  price?: number;
  documents?: string;
  created_at!: Date;
  updated_at!: Date;
  location_id?: number;
  location_name?: string;
  date_effective?: string;
  county?: string;
  district?: string;
  gmd?: string;
  land_lot?: string;
  section?: number;
  state_title?: string;
  type?: string;
  lot?: string;
  block?: string;
  phase?: string;
  pod?: string;
  unit?: string;
  long_legal?: string;
  plat_list?: string;
  chain_title_type?: string;
  township?: number;
  title_range?: number;
  zones?: string;
  note?: string;
  deed_list?: string;
  mortgage_list?: string;
  easement_list?: string;
  lien_list?: string;
  covenant?: string;
  apartment?: string;
  search_type?: string;
  search_type_detail?: string;
  search_type_detail_value?: string;
  condo_name?: string;
  subdivision_section?: string;
  interest_common?: string;
  parking?: string;
  garage?: string;
  storage?: string;
  wine?: string;
  floor_plan_list?: string;
  certified_by_user!: number;
  owner_id?: number;
  order_item_id?: number;
  title_report?: string;
  guest_id?: number;
  plat_floor_plan_list?: string;

  // bought_titles hasMany document via bought_title_id
  document!: document[];
  getDocuments!: Sequelize.HasManyGetAssociationsMixin<document>;
  setDocuments!: Sequelize.HasManySetAssociationsMixin<document, documentId>;
  addDocument!: Sequelize.HasManyAddAssociationMixin<document, documentId>;
  addDocuments!: Sequelize.HasManyAddAssociationsMixin<document, documentId>;
  createDocument!: Sequelize.HasManyCreateAssociationMixin<document>;
  removeDocument!: Sequelize.HasManyRemoveAssociationMixin<
    document,
    documentId
  >;
  removeDocuments!: Sequelize.HasManyRemoveAssociationsMixin<
    document,
    documentId
  >;
  hasDocument!: Sequelize.HasManyHasAssociationMixin<document, documentId>;
  hasDocuments!: Sequelize.HasManyHasAssociationsMixin<document, documentId>;
  countDocuments!: Sequelize.HasManyCountAssociationsMixin;
  // bought_titles belongsTo guests via guest_id
  guest!: guests;
  getGuest!: Sequelize.BelongsToGetAssociationMixin<guests>;
  setGuest!: Sequelize.BelongsToSetAssociationMixin<guests, guestsId>;
  createGuest!: Sequelize.BelongsToCreateAssociationMixin<guests>;
  // bought_titles belongsTo locations via location_id
  location!: locations;
  getLocation!: Sequelize.BelongsToGetAssociationMixin<locations>;
  setLocation!: Sequelize.BelongsToSetAssociationMixin<locations, locationsId>;
  createLocation!: Sequelize.BelongsToCreateAssociationMixin<locations>;
  // bought_titles belongsTo order_items via order_item_id
  order_item!: order_items;
  getOrder_item!: Sequelize.BelongsToGetAssociationMixin<order_items>;
  setOrder_item!: Sequelize.BelongsToSetAssociationMixin<
    order_items,
    order_itemsId
  >;
  createOrder_item!: Sequelize.BelongsToCreateAssociationMixin<order_items>;
  // bought_titles belongsTo titles via title_id
  title!: titles;
  getTitle!: Sequelize.BelongsToGetAssociationMixin<titles>;
  setTitle!: Sequelize.BelongsToSetAssociationMixin<titles, titlesId>;
  createTitle!: Sequelize.BelongsToCreateAssociationMixin<titles>;
  // bought_titles belongsTo users via owner_id
  owner!: users;
  getOwner!: Sequelize.BelongsToGetAssociationMixin<users>;
  setOwner!: Sequelize.BelongsToSetAssociationMixin<users, usersId>;
  createOwner!: Sequelize.BelongsToCreateAssociationMixin<users>;

  static initModel(sequelize: Sequelize.Sequelize): typeof bought_titles {
    bought_titles.init(
      {
        id: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
        },
        title_id: {
          type: DataTypes.INTEGER,
          allowNull: true,
          references: {
            model: "titles",
            key: "id",
          },
        },
        date_search: {
          type: DataTypes.DATEONLY,
          allowNull: true,
        },
        price: {
          type: DataTypes.DOUBLE,
          allowNull: true,
        },
        documents: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        created_at: {
          type: DataTypes.DATE,
          allowNull: false,
        },
        updated_at: {
          type: DataTypes.DATE,
          allowNull: false,
        },
        location_id: {
          type: DataTypes.INTEGER,
          allowNull: true,
          references: {
            model: "locations",
            key: "id",
          },
          unique: "FK_EDE8FEDE64D218E",
        },
        location_name: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        date_effective: {
          type: DataTypes.DATEONLY,
          allowNull: true,
        },
        county: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        district: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        gmd: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        land_lot: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        section: {
          type: DataTypes.INTEGER,
          allowNull: true,
        },
        state_title: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        type: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        lot: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        block: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        phase: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        pod: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        unit: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        long_legal: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        plat_list: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        chain_title_type: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        township: {
          type: DataTypes.INTEGER,
          allowNull: true,
        },
        title_range: {
          type: DataTypes.INTEGER,
          allowNull: true,
        },
        zones: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        note: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        deed_list: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        mortgage_list: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        easement_list: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        lien_list: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        covenant: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        apartment: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        search_type: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        search_type_detail: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        search_type_detail_value: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        condo_name: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        subdivision_section: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        interest_common: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        parking: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        garage: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        storage: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        wine: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        floor_plan_list: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        certified_by_user: {
          type: DataTypes.TINYINT,
          allowNull: false,
          defaultValue: 0,
        },
        owner_id: {
          type: DataTypes.INTEGER,
          allowNull: true,
          references: {
            model: "users",
            key: "id",
          },
        },
        order_item_id: {
          type: DataTypes.INTEGER,
          allowNull: true,
          references: {
            model: "order_items",
            key: "id",
          },
        },
        title_report: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        guest_id: {
          type: DataTypes.INTEGER,
          allowNull: true,
          references: {
            model: "guests",
            key: "id",
          },
        },
        plat_floor_plan_list: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
      },
      {
        sequelize,
        tableName: "bought_titles",
        timestamps: false,
        indexes: [
          {
            name: "PRIMARY",
            unique: true,
            using: "BTREE",
            fields: [{ name: "id" }],
          },
          {
            name: "UNIQ_EDE8FEDE64D218E",
            unique: true,
            using: "BTREE",
            fields: [{ name: "location_id" }],
          },
          {
            name: "IDX_EDE8FEDEA9F87BD",
            using: "BTREE",
            fields: [{ name: "title_id" }],
          },
          {
            name: "IDX_EDE8FEDE7E3C61F9",
            using: "BTREE",
            fields: [{ name: "owner_id" }],
          },
          {
            name: "IDX_EDE8FEDEE415FB15",
            using: "BTREE",
            fields: [{ name: "order_item_id" }],
          },
          {
            name: "IDX_EDE8FEDE9A4AA658",
            using: "BTREE",
            fields: [{ name: "guest_id" }],
          },
        ],
      }
    );
    return bought_titles;
  }
}
