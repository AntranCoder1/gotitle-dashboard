import Sequelize, { DataTypes, Model, Optional } from 'sequelize';
import type { permission_role, permission_roleId } from './permission_role';
import type { roles, rolesId } from './roles';

export interface permissionsAttributes {
  id: number;
  name: string;
}

export type permissionsPk = "id";
export type permissionsId = permissions[permissionsPk];
export type permissionsCreationAttributes = Optional<permissionsAttributes, permissionsPk>;

export class permissions extends Model<permissionsAttributes, permissionsCreationAttributes> implements permissionsAttributes {
  id!: number;
  name!: string;

  // permissions hasMany permission_role via permission_id
  permission_roles!: permission_role[];
  getPermission_roles!: Sequelize.HasManyGetAssociationsMixin<permission_role>;
  setPermission_roles!: Sequelize.HasManySetAssociationsMixin<permission_role, permission_roleId>;
  addPermission_role!: Sequelize.HasManyAddAssociationMixin<permission_role, permission_roleId>;
  addPermission_roles!: Sequelize.HasManyAddAssociationsMixin<permission_role, permission_roleId>;
  createPermission_role!: Sequelize.HasManyCreateAssociationMixin<permission_role>;
  removePermission_role!: Sequelize.HasManyRemoveAssociationMixin<permission_role, permission_roleId>;
  removePermission_roles!: Sequelize.HasManyRemoveAssociationsMixin<permission_role, permission_roleId>;
  hasPermission_role!: Sequelize.HasManyHasAssociationMixin<permission_role, permission_roleId>;
  hasPermission_roles!: Sequelize.HasManyHasAssociationsMixin<permission_role, permission_roleId>;
  countPermission_roles!: Sequelize.HasManyCountAssociationsMixin;
  // permissions belongsToMany roles via permission_id and role_id
  roles!: roles[];
  getRoles!: Sequelize.BelongsToManyGetAssociationsMixin<roles>;
  setRoles!: Sequelize.BelongsToManySetAssociationsMixin<roles, rolesId>;
  addRole!: Sequelize.BelongsToManyAddAssociationMixin<roles, rolesId>;
  addRoles!: Sequelize.BelongsToManyAddAssociationsMixin<roles, rolesId>;
  createRole!: Sequelize.BelongsToManyCreateAssociationMixin<roles>;
  removeRole!: Sequelize.BelongsToManyRemoveAssociationMixin<roles, rolesId>;
  removeRoles!: Sequelize.BelongsToManyRemoveAssociationsMixin<roles, rolesId>;
  hasRole!: Sequelize.BelongsToManyHasAssociationMixin<roles, rolesId>;
  hasRoles!: Sequelize.BelongsToManyHasAssociationsMixin<roles, rolesId>;
  countRoles!: Sequelize.BelongsToManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof permissions {
    permissions.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'permissions',
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
  return permissions;
  }
}
