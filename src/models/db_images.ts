import Sequelize, { DataTypes, Model, Optional } from 'sequelize';
import type { covenants, covenantsId } from './covenants';
import type { covenants_db_images, covenants_db_imagesId } from './covenants_db_images';
import type { deed, deedId } from './deed';
import type { deed_db_images, deed_db_imagesId } from './deed_db_images';
import type { easements, easementsId } from './easements';
import type { easements_db_images, easements_db_imagesId } from './easements_db_images';
import type { liens, liensId } from './liens';
import type { liens_db_images, liens_db_imagesId } from './liens_db_images';
import type { misc_civil_probates, misc_civil_probatesId } from './misc_civil_probates';
import type { misc_civil_probates_db_images, misc_civil_probates_db_imagesId } from './misc_civil_probates_db_images';
import type { mortgages, mortgagesId } from './mortgages';
import type { mortgages_db_images, mortgages_db_imagesId } from './mortgages_db_images';
import type { plat_floor_plans, plat_floor_plansId } from './plat_floor_plans';
import type { plat_floor_plans_db_images, plat_floor_plans_db_imagesId } from './plat_floor_plans_db_images';
import type { tax, taxId } from './tax';
import type { tax_db_images, tax_db_imagesId } from './tax_db_images';

export interface db_imagesAttributes {
  id: number;
  name?: string;
  image_data?: string;
  created_at: Date;
  updated_at: Date;
  assigned?: number;
  position?: number;
}

export type db_imagesPk = "id";
export type db_imagesId = db_images[db_imagesPk];
export type db_imagesCreationAttributes = Optional<db_imagesAttributes, db_imagesPk>;

export class db_images extends Model<db_imagesAttributes, db_imagesCreationAttributes> implements db_imagesAttributes {
  id!: number;
  name?: string;
  image_data?: string;
  created_at!: Date;
  updated_at!: Date;
  assigned?: number;
  position?: number;

  // db_images belongsToMany covenants via db_image_id and covenant_id
  covenants!: covenants[];
  getCovenants!: Sequelize.BelongsToManyGetAssociationsMixin<covenants>;
  setCovenants!: Sequelize.BelongsToManySetAssociationsMixin<covenants, covenantsId>;
  addCovenant!: Sequelize.BelongsToManyAddAssociationMixin<covenants, covenantsId>;
  addCovenants!: Sequelize.BelongsToManyAddAssociationsMixin<covenants, covenantsId>;
  createCovenant!: Sequelize.BelongsToManyCreateAssociationMixin<covenants>;
  removeCovenant!: Sequelize.BelongsToManyRemoveAssociationMixin<covenants, covenantsId>;
  removeCovenants!: Sequelize.BelongsToManyRemoveAssociationsMixin<covenants, covenantsId>;
  hasCovenant!: Sequelize.BelongsToManyHasAssociationMixin<covenants, covenantsId>;
  hasCovenants!: Sequelize.BelongsToManyHasAssociationsMixin<covenants, covenantsId>;
  countCovenants!: Sequelize.BelongsToManyCountAssociationsMixin;
  // db_images hasMany covenants_db_images via db_image_id
  covenants_db_images!: covenants_db_images[];
  getCovenants_db_images!: Sequelize.HasManyGetAssociationsMixin<covenants_db_images>;
  setCovenants_db_images!: Sequelize.HasManySetAssociationsMixin<covenants_db_images, covenants_db_imagesId>;
  addCovenants_db_image!: Sequelize.HasManyAddAssociationMixin<covenants_db_images, covenants_db_imagesId>;
  addCovenants_db_images!: Sequelize.HasManyAddAssociationsMixin<covenants_db_images, covenants_db_imagesId>;
  createCovenants_db_image!: Sequelize.HasManyCreateAssociationMixin<covenants_db_images>;
  removeCovenants_db_image!: Sequelize.HasManyRemoveAssociationMixin<covenants_db_images, covenants_db_imagesId>;
  removeCovenants_db_images!: Sequelize.HasManyRemoveAssociationsMixin<covenants_db_images, covenants_db_imagesId>;
  hasCovenants_db_image!: Sequelize.HasManyHasAssociationMixin<covenants_db_images, covenants_db_imagesId>;
  hasCovenants_db_images!: Sequelize.HasManyHasAssociationsMixin<covenants_db_images, covenants_db_imagesId>;
  countCovenants_db_images!: Sequelize.HasManyCountAssociationsMixin;
  // db_images belongsToMany deed via db_image_id and deed_id
  deeds!: deed[];
  getDeeds!: Sequelize.BelongsToManyGetAssociationsMixin<deed>;
  setDeeds!: Sequelize.BelongsToManySetAssociationsMixin<deed, deedId>;
  addDeed!: Sequelize.BelongsToManyAddAssociationMixin<deed, deedId>;
  addDeeds!: Sequelize.BelongsToManyAddAssociationsMixin<deed, deedId>;
  createDeed!: Sequelize.BelongsToManyCreateAssociationMixin<deed>;
  removeDeed!: Sequelize.BelongsToManyRemoveAssociationMixin<deed, deedId>;
  removeDeeds!: Sequelize.BelongsToManyRemoveAssociationsMixin<deed, deedId>;
  hasDeed!: Sequelize.BelongsToManyHasAssociationMixin<deed, deedId>;
  hasDeeds!: Sequelize.BelongsToManyHasAssociationsMixin<deed, deedId>;
  countDeeds!: Sequelize.BelongsToManyCountAssociationsMixin;
  // db_images hasMany deed_db_images via db_image_id
  deed_db_images!: deed_db_images[];
  getDeed_db_images!: Sequelize.HasManyGetAssociationsMixin<deed_db_images>;
  setDeed_db_images!: Sequelize.HasManySetAssociationsMixin<deed_db_images, deed_db_imagesId>;
  addDeed_db_image!: Sequelize.HasManyAddAssociationMixin<deed_db_images, deed_db_imagesId>;
  addDeed_db_images!: Sequelize.HasManyAddAssociationsMixin<deed_db_images, deed_db_imagesId>;
  createDeed_db_image!: Sequelize.HasManyCreateAssociationMixin<deed_db_images>;
  removeDeed_db_image!: Sequelize.HasManyRemoveAssociationMixin<deed_db_images, deed_db_imagesId>;
  removeDeed_db_images!: Sequelize.HasManyRemoveAssociationsMixin<deed_db_images, deed_db_imagesId>;
  hasDeed_db_image!: Sequelize.HasManyHasAssociationMixin<deed_db_images, deed_db_imagesId>;
  hasDeed_db_images!: Sequelize.HasManyHasAssociationsMixin<deed_db_images, deed_db_imagesId>;
  countDeed_db_images!: Sequelize.HasManyCountAssociationsMixin;
  // db_images belongsToMany easements via db_image_id and easement_id
  easements!: easements[];
  getEasements!: Sequelize.BelongsToManyGetAssociationsMixin<easements>;
  setEasements!: Sequelize.BelongsToManySetAssociationsMixin<easements, easementsId>;
  addEasement!: Sequelize.BelongsToManyAddAssociationMixin<easements, easementsId>;
  addEasements!: Sequelize.BelongsToManyAddAssociationsMixin<easements, easementsId>;
  createEasement!: Sequelize.BelongsToManyCreateAssociationMixin<easements>;
  removeEasement!: Sequelize.BelongsToManyRemoveAssociationMixin<easements, easementsId>;
  removeEasements!: Sequelize.BelongsToManyRemoveAssociationsMixin<easements, easementsId>;
  hasEasement!: Sequelize.BelongsToManyHasAssociationMixin<easements, easementsId>;
  hasEasements!: Sequelize.BelongsToManyHasAssociationsMixin<easements, easementsId>;
  countEasements!: Sequelize.BelongsToManyCountAssociationsMixin;
  // db_images hasMany easements_db_images via db_image_id
  easements_db_images!: easements_db_images[];
  getEasements_db_images!: Sequelize.HasManyGetAssociationsMixin<easements_db_images>;
  setEasements_db_images!: Sequelize.HasManySetAssociationsMixin<easements_db_images, easements_db_imagesId>;
  addEasements_db_image!: Sequelize.HasManyAddAssociationMixin<easements_db_images, easements_db_imagesId>;
  addEasements_db_images!: Sequelize.HasManyAddAssociationsMixin<easements_db_images, easements_db_imagesId>;
  createEasements_db_image!: Sequelize.HasManyCreateAssociationMixin<easements_db_images>;
  removeEasements_db_image!: Sequelize.HasManyRemoveAssociationMixin<easements_db_images, easements_db_imagesId>;
  removeEasements_db_images!: Sequelize.HasManyRemoveAssociationsMixin<easements_db_images, easements_db_imagesId>;
  hasEasements_db_image!: Sequelize.HasManyHasAssociationMixin<easements_db_images, easements_db_imagesId>;
  hasEasements_db_images!: Sequelize.HasManyHasAssociationsMixin<easements_db_images, easements_db_imagesId>;
  countEasements_db_images!: Sequelize.HasManyCountAssociationsMixin;
  // db_images belongsToMany liens via db_image_id and lien_id
  liens!: liens[];
  getLiens!: Sequelize.BelongsToManyGetAssociationsMixin<liens>;
  setLiens!: Sequelize.BelongsToManySetAssociationsMixin<liens, liensId>;
  addLien!: Sequelize.BelongsToManyAddAssociationMixin<liens, liensId>;
  addLiens!: Sequelize.BelongsToManyAddAssociationsMixin<liens, liensId>;
  createLien!: Sequelize.BelongsToManyCreateAssociationMixin<liens>;
  removeLien!: Sequelize.BelongsToManyRemoveAssociationMixin<liens, liensId>;
  removeLiens!: Sequelize.BelongsToManyRemoveAssociationsMixin<liens, liensId>;
  hasLien!: Sequelize.BelongsToManyHasAssociationMixin<liens, liensId>;
  hasLiens!: Sequelize.BelongsToManyHasAssociationsMixin<liens, liensId>;
  countLiens!: Sequelize.BelongsToManyCountAssociationsMixin;
  // db_images hasMany liens_db_images via db_image_id
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
  // db_images belongsToMany misc_civil_probates via db_image_id and misc_civil_probate_id
  misc_civil_probates!: misc_civil_probates[];
  getMisc_civil_probates!: Sequelize.BelongsToManyGetAssociationsMixin<misc_civil_probates>;
  setMisc_civil_probates!: Sequelize.BelongsToManySetAssociationsMixin<misc_civil_probates, misc_civil_probatesId>;
  addMisc_civil_probate!: Sequelize.BelongsToManyAddAssociationMixin<misc_civil_probates, misc_civil_probatesId>;
  addMisc_civil_probates!: Sequelize.BelongsToManyAddAssociationsMixin<misc_civil_probates, misc_civil_probatesId>;
  createMisc_civil_probate!: Sequelize.BelongsToManyCreateAssociationMixin<misc_civil_probates>;
  removeMisc_civil_probate!: Sequelize.BelongsToManyRemoveAssociationMixin<misc_civil_probates, misc_civil_probatesId>;
  removeMisc_civil_probates!: Sequelize.BelongsToManyRemoveAssociationsMixin<misc_civil_probates, misc_civil_probatesId>;
  hasMisc_civil_probate!: Sequelize.BelongsToManyHasAssociationMixin<misc_civil_probates, misc_civil_probatesId>;
  hasMisc_civil_probates!: Sequelize.BelongsToManyHasAssociationsMixin<misc_civil_probates, misc_civil_probatesId>;
  countMisc_civil_probates!: Sequelize.BelongsToManyCountAssociationsMixin;
  // db_images hasMany misc_civil_probates_db_images via db_image_id
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
  // db_images belongsToMany mortgages via db_image_id and mortgage_id
  mortgages!: mortgages[];
  getMortgages!: Sequelize.BelongsToManyGetAssociationsMixin<mortgages>;
  setMortgages!: Sequelize.BelongsToManySetAssociationsMixin<mortgages, mortgagesId>;
  addMortgage!: Sequelize.BelongsToManyAddAssociationMixin<mortgages, mortgagesId>;
  addMortgages!: Sequelize.BelongsToManyAddAssociationsMixin<mortgages, mortgagesId>;
  createMortgage!: Sequelize.BelongsToManyCreateAssociationMixin<mortgages>;
  removeMortgage!: Sequelize.BelongsToManyRemoveAssociationMixin<mortgages, mortgagesId>;
  removeMortgages!: Sequelize.BelongsToManyRemoveAssociationsMixin<mortgages, mortgagesId>;
  hasMortgage!: Sequelize.BelongsToManyHasAssociationMixin<mortgages, mortgagesId>;
  hasMortgages!: Sequelize.BelongsToManyHasAssociationsMixin<mortgages, mortgagesId>;
  countMortgages!: Sequelize.BelongsToManyCountAssociationsMixin;
  // db_images hasMany mortgages_db_images via db_image_id
  mortgages_db_images!: mortgages_db_images[];
  getMortgages_db_images!: Sequelize.HasManyGetAssociationsMixin<mortgages_db_images>;
  setMortgages_db_images!: Sequelize.HasManySetAssociationsMixin<mortgages_db_images, mortgages_db_imagesId>;
  addMortgages_db_image!: Sequelize.HasManyAddAssociationMixin<mortgages_db_images, mortgages_db_imagesId>;
  addMortgages_db_images!: Sequelize.HasManyAddAssociationsMixin<mortgages_db_images, mortgages_db_imagesId>;
  createMortgages_db_image!: Sequelize.HasManyCreateAssociationMixin<mortgages_db_images>;
  removeMortgages_db_image!: Sequelize.HasManyRemoveAssociationMixin<mortgages_db_images, mortgages_db_imagesId>;
  removeMortgages_db_images!: Sequelize.HasManyRemoveAssociationsMixin<mortgages_db_images, mortgages_db_imagesId>;
  hasMortgages_db_image!: Sequelize.HasManyHasAssociationMixin<mortgages_db_images, mortgages_db_imagesId>;
  hasMortgages_db_images!: Sequelize.HasManyHasAssociationsMixin<mortgages_db_images, mortgages_db_imagesId>;
  countMortgages_db_images!: Sequelize.HasManyCountAssociationsMixin;
  // db_images belongsToMany plat_floor_plans via db_image_id and plat_floor_plan_id
  plat_floor_plans!: plat_floor_plans[];
  getPlat_floor_plans!: Sequelize.BelongsToManyGetAssociationsMixin<plat_floor_plans>;
  setPlat_floor_plans!: Sequelize.BelongsToManySetAssociationsMixin<plat_floor_plans, plat_floor_plansId>;
  addPlat_floor_plan!: Sequelize.BelongsToManyAddAssociationMixin<plat_floor_plans, plat_floor_plansId>;
  addPlat_floor_plans!: Sequelize.BelongsToManyAddAssociationsMixin<plat_floor_plans, plat_floor_plansId>;
  createPlat_floor_plan!: Sequelize.BelongsToManyCreateAssociationMixin<plat_floor_plans>;
  removePlat_floor_plan!: Sequelize.BelongsToManyRemoveAssociationMixin<plat_floor_plans, plat_floor_plansId>;
  removePlat_floor_plans!: Sequelize.BelongsToManyRemoveAssociationsMixin<plat_floor_plans, plat_floor_plansId>;
  hasPlat_floor_plan!: Sequelize.BelongsToManyHasAssociationMixin<plat_floor_plans, plat_floor_plansId>;
  hasPlat_floor_plans!: Sequelize.BelongsToManyHasAssociationsMixin<plat_floor_plans, plat_floor_plansId>;
  countPlat_floor_plans!: Sequelize.BelongsToManyCountAssociationsMixin;
  // db_images hasMany plat_floor_plans_db_images via db_image_id
  plat_floor_plans_db_images!: plat_floor_plans_db_images[];
  getPlat_floor_plans_db_images!: Sequelize.HasManyGetAssociationsMixin<plat_floor_plans_db_images>;
  setPlat_floor_plans_db_images!: Sequelize.HasManySetAssociationsMixin<plat_floor_plans_db_images, plat_floor_plans_db_imagesId>;
  addPlat_floor_plans_db_image!: Sequelize.HasManyAddAssociationMixin<plat_floor_plans_db_images, plat_floor_plans_db_imagesId>;
  addPlat_floor_plans_db_images!: Sequelize.HasManyAddAssociationsMixin<plat_floor_plans_db_images, plat_floor_plans_db_imagesId>;
  createPlat_floor_plans_db_image!: Sequelize.HasManyCreateAssociationMixin<plat_floor_plans_db_images>;
  removePlat_floor_plans_db_image!: Sequelize.HasManyRemoveAssociationMixin<plat_floor_plans_db_images, plat_floor_plans_db_imagesId>;
  removePlat_floor_plans_db_images!: Sequelize.HasManyRemoveAssociationsMixin<plat_floor_plans_db_images, plat_floor_plans_db_imagesId>;
  hasPlat_floor_plans_db_image!: Sequelize.HasManyHasAssociationMixin<plat_floor_plans_db_images, plat_floor_plans_db_imagesId>;
  hasPlat_floor_plans_db_images!: Sequelize.HasManyHasAssociationsMixin<plat_floor_plans_db_images, plat_floor_plans_db_imagesId>;
  countPlat_floor_plans_db_images!: Sequelize.HasManyCountAssociationsMixin;
  // db_images belongsToMany tax via db_image_id and tax_id
  taxes!: tax[];
  getTaxes!: Sequelize.BelongsToManyGetAssociationsMixin<tax>;
  setTaxes!: Sequelize.BelongsToManySetAssociationsMixin<tax, taxId>;
  addTax!: Sequelize.BelongsToManyAddAssociationMixin<tax, taxId>;
  addTaxes!: Sequelize.BelongsToManyAddAssociationsMixin<tax, taxId>;
  createTax!: Sequelize.BelongsToManyCreateAssociationMixin<tax>;
  removeTax!: Sequelize.BelongsToManyRemoveAssociationMixin<tax, taxId>;
  removeTaxes!: Sequelize.BelongsToManyRemoveAssociationsMixin<tax, taxId>;
  hasTax!: Sequelize.BelongsToManyHasAssociationMixin<tax, taxId>;
  hasTaxes!: Sequelize.BelongsToManyHasAssociationsMixin<tax, taxId>;
  countTaxes!: Sequelize.BelongsToManyCountAssociationsMixin;
  // db_images hasMany tax_db_images via db_image_id
  tax_db_images!: tax_db_images[];
  getTax_db_images!: Sequelize.HasManyGetAssociationsMixin<tax_db_images>;
  setTax_db_images!: Sequelize.HasManySetAssociationsMixin<tax_db_images, tax_db_imagesId>;
  addTax_db_image!: Sequelize.HasManyAddAssociationMixin<tax_db_images, tax_db_imagesId>;
  addTax_db_images!: Sequelize.HasManyAddAssociationsMixin<tax_db_images, tax_db_imagesId>;
  createTax_db_image!: Sequelize.HasManyCreateAssociationMixin<tax_db_images>;
  removeTax_db_image!: Sequelize.HasManyRemoveAssociationMixin<tax_db_images, tax_db_imagesId>;
  removeTax_db_images!: Sequelize.HasManyRemoveAssociationsMixin<tax_db_images, tax_db_imagesId>;
  hasTax_db_image!: Sequelize.HasManyHasAssociationMixin<tax_db_images, tax_db_imagesId>;
  hasTax_db_images!: Sequelize.HasManyHasAssociationsMixin<tax_db_images, tax_db_imagesId>;
  countTax_db_images!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof db_images {
    db_images.init({
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
    image_data: {
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
    assigned: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    position: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'db_images',
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
  return db_images;
  }
}
