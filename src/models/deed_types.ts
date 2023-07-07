import Sequelize, { DataTypes, Model, Optional } from 'sequelize';
import type { covenants, covenantsId } from './covenants';
import type { deed, deedId } from './deed';
import type { easements, easementsId } from './easements';
import type { liens, liensId } from './liens';
import type { misc_civil_probates, misc_civil_probatesId } from './misc_civil_probates';
import type { mortgages, mortgagesId } from './mortgages';
import type { plat_floor_plans, plat_floor_plansId } from './plat_floor_plans';
import type { tax, taxId } from './tax';

export interface deed_typesAttributes {
  id: number;
  name: string;
  created_at: Date;
  updated_at: Date;
  code?: string;
  scope?: string;
  doc_type?: string;
  user_id?: number;
  user_list_id?: number;
}

export type deed_typesPk = "id";
export type deed_typesId = deed_types[deed_typesPk];
export type deed_typesCreationAttributes = Optional<deed_typesAttributes, deed_typesPk>;

export class deed_types extends Model<deed_typesAttributes, deed_typesCreationAttributes> implements deed_typesAttributes {
  id!: number;
  name!: string;
  created_at!: Date;
  updated_at!: Date;
  code?: string;
  scope?: string;
  doc_type?: string;
  user_id?: number;
  user_list_id?: number;

  // deed_types hasMany covenants via deed_type_id
  covenants!: covenants[];
  getCovenants!: Sequelize.HasManyGetAssociationsMixin<covenants>;
  setCovenants!: Sequelize.HasManySetAssociationsMixin<covenants, covenantsId>;
  addCovenant!: Sequelize.HasManyAddAssociationMixin<covenants, covenantsId>;
  addCovenants!: Sequelize.HasManyAddAssociationsMixin<covenants, covenantsId>;
  createCovenant!: Sequelize.HasManyCreateAssociationMixin<covenants>;
  removeCovenant!: Sequelize.HasManyRemoveAssociationMixin<covenants, covenantsId>;
  removeCovenants!: Sequelize.HasManyRemoveAssociationsMixin<covenants, covenantsId>;
  hasCovenant!: Sequelize.HasManyHasAssociationMixin<covenants, covenantsId>;
  hasCovenants!: Sequelize.HasManyHasAssociationsMixin<covenants, covenantsId>;
  countCovenants!: Sequelize.HasManyCountAssociationsMixin;
  // deed_types hasMany deed via deed_type_id
  deeds!: deed[];
  getDeeds!: Sequelize.HasManyGetAssociationsMixin<deed>;
  setDeeds!: Sequelize.HasManySetAssociationsMixin<deed, deedId>;
  addDeed!: Sequelize.HasManyAddAssociationMixin<deed, deedId>;
  addDeeds!: Sequelize.HasManyAddAssociationsMixin<deed, deedId>;
  createDeed!: Sequelize.HasManyCreateAssociationMixin<deed>;
  removeDeed!: Sequelize.HasManyRemoveAssociationMixin<deed, deedId>;
  removeDeeds!: Sequelize.HasManyRemoveAssociationsMixin<deed, deedId>;
  hasDeed!: Sequelize.HasManyHasAssociationMixin<deed, deedId>;
  hasDeeds!: Sequelize.HasManyHasAssociationsMixin<deed, deedId>;
  countDeeds!: Sequelize.HasManyCountAssociationsMixin;
  // deed_types hasMany easements via deed_type_id
  easements!: easements[];
  getEasements!: Sequelize.HasManyGetAssociationsMixin<easements>;
  setEasements!: Sequelize.HasManySetAssociationsMixin<easements, easementsId>;
  addEasement!: Sequelize.HasManyAddAssociationMixin<easements, easementsId>;
  addEasements!: Sequelize.HasManyAddAssociationsMixin<easements, easementsId>;
  createEasement!: Sequelize.HasManyCreateAssociationMixin<easements>;
  removeEasement!: Sequelize.HasManyRemoveAssociationMixin<easements, easementsId>;
  removeEasements!: Sequelize.HasManyRemoveAssociationsMixin<easements, easementsId>;
  hasEasement!: Sequelize.HasManyHasAssociationMixin<easements, easementsId>;
  hasEasements!: Sequelize.HasManyHasAssociationsMixin<easements, easementsId>;
  countEasements!: Sequelize.HasManyCountAssociationsMixin;
  // deed_types hasMany liens via deed_type_id
  liens!: liens[];
  getLiens!: Sequelize.HasManyGetAssociationsMixin<liens>;
  setLiens!: Sequelize.HasManySetAssociationsMixin<liens, liensId>;
  addLien!: Sequelize.HasManyAddAssociationMixin<liens, liensId>;
  addLiens!: Sequelize.HasManyAddAssociationsMixin<liens, liensId>;
  createLien!: Sequelize.HasManyCreateAssociationMixin<liens>;
  removeLien!: Sequelize.HasManyRemoveAssociationMixin<liens, liensId>;
  removeLiens!: Sequelize.HasManyRemoveAssociationsMixin<liens, liensId>;
  hasLien!: Sequelize.HasManyHasAssociationMixin<liens, liensId>;
  hasLiens!: Sequelize.HasManyHasAssociationsMixin<liens, liensId>;
  countLiens!: Sequelize.HasManyCountAssociationsMixin;
  // deed_types hasMany misc_civil_probates via deed_type_id
  misc_civil_probates!: misc_civil_probates[];
  getMisc_civil_probates!: Sequelize.HasManyGetAssociationsMixin<misc_civil_probates>;
  setMisc_civil_probates!: Sequelize.HasManySetAssociationsMixin<misc_civil_probates, misc_civil_probatesId>;
  addMisc_civil_probate!: Sequelize.HasManyAddAssociationMixin<misc_civil_probates, misc_civil_probatesId>;
  addMisc_civil_probates!: Sequelize.HasManyAddAssociationsMixin<misc_civil_probates, misc_civil_probatesId>;
  createMisc_civil_probate!: Sequelize.HasManyCreateAssociationMixin<misc_civil_probates>;
  removeMisc_civil_probate!: Sequelize.HasManyRemoveAssociationMixin<misc_civil_probates, misc_civil_probatesId>;
  removeMisc_civil_probates!: Sequelize.HasManyRemoveAssociationsMixin<misc_civil_probates, misc_civil_probatesId>;
  hasMisc_civil_probate!: Sequelize.HasManyHasAssociationMixin<misc_civil_probates, misc_civil_probatesId>;
  hasMisc_civil_probates!: Sequelize.HasManyHasAssociationsMixin<misc_civil_probates, misc_civil_probatesId>;
  countMisc_civil_probates!: Sequelize.HasManyCountAssociationsMixin;
  // deed_types hasMany mortgages via deed_type_id
  mortgages!: mortgages[];
  getMortgages!: Sequelize.HasManyGetAssociationsMixin<mortgages>;
  setMortgages!: Sequelize.HasManySetAssociationsMixin<mortgages, mortgagesId>;
  addMortgage!: Sequelize.HasManyAddAssociationMixin<mortgages, mortgagesId>;
  addMortgages!: Sequelize.HasManyAddAssociationsMixin<mortgages, mortgagesId>;
  createMortgage!: Sequelize.HasManyCreateAssociationMixin<mortgages>;
  removeMortgage!: Sequelize.HasManyRemoveAssociationMixin<mortgages, mortgagesId>;
  removeMortgages!: Sequelize.HasManyRemoveAssociationsMixin<mortgages, mortgagesId>;
  hasMortgage!: Sequelize.HasManyHasAssociationMixin<mortgages, mortgagesId>;
  hasMortgages!: Sequelize.HasManyHasAssociationsMixin<mortgages, mortgagesId>;
  countMortgages!: Sequelize.HasManyCountAssociationsMixin;
  // deed_types hasMany plat_floor_plans via deed_type_id
  plat_floor_plans!: plat_floor_plans[];
  getPlat_floor_plans!: Sequelize.HasManyGetAssociationsMixin<plat_floor_plans>;
  setPlat_floor_plans!: Sequelize.HasManySetAssociationsMixin<plat_floor_plans, plat_floor_plansId>;
  addPlat_floor_plan!: Sequelize.HasManyAddAssociationMixin<plat_floor_plans, plat_floor_plansId>;
  addPlat_floor_plans!: Sequelize.HasManyAddAssociationsMixin<plat_floor_plans, plat_floor_plansId>;
  createPlat_floor_plan!: Sequelize.HasManyCreateAssociationMixin<plat_floor_plans>;
  removePlat_floor_plan!: Sequelize.HasManyRemoveAssociationMixin<plat_floor_plans, plat_floor_plansId>;
  removePlat_floor_plans!: Sequelize.HasManyRemoveAssociationsMixin<plat_floor_plans, plat_floor_plansId>;
  hasPlat_floor_plan!: Sequelize.HasManyHasAssociationMixin<plat_floor_plans, plat_floor_plansId>;
  hasPlat_floor_plans!: Sequelize.HasManyHasAssociationsMixin<plat_floor_plans, plat_floor_plansId>;
  countPlat_floor_plans!: Sequelize.HasManyCountAssociationsMixin;
  // deed_types hasMany tax via deed_type_id
  taxes!: tax[];
  getTaxes!: Sequelize.HasManyGetAssociationsMixin<tax>;
  setTaxes!: Sequelize.HasManySetAssociationsMixin<tax, taxId>;
  addTax!: Sequelize.HasManyAddAssociationMixin<tax, taxId>;
  addTaxes!: Sequelize.HasManyAddAssociationsMixin<tax, taxId>;
  createTax!: Sequelize.HasManyCreateAssociationMixin<tax>;
  removeTax!: Sequelize.HasManyRemoveAssociationMixin<tax, taxId>;
  removeTaxes!: Sequelize.HasManyRemoveAssociationsMixin<tax, taxId>;
  hasTax!: Sequelize.HasManyHasAssociationMixin<tax, taxId>;
  hasTaxes!: Sequelize.HasManyHasAssociationsMixin<tax, taxId>;
  countTaxes!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof deed_types {
    deed_types.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
    code: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    scope: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    doc_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    user_list_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'deed_types',
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
  return deed_types;
  }
}
