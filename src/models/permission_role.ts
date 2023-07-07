import Sequelize, { DataTypes, Model, Optional } from 'sequelize';
import type { permissions, permissionsId } from './permissions';
import type { roles, rolesId } from './roles';

export interface permission_roleAttributes {
  role_id: number;
  permission_id: number;
}

export type permission_rolePk = "role_id" | "permission_id";
export type permission_roleId = permission_role[permission_rolePk];
export type permission_roleCreationAttributes = Optional<permission_roleAttributes, permission_rolePk>;

export class permission_role extends Model<permission_roleAttributes, permission_roleCreationAttributes> implements permission_roleAttributes {
  role_id!: number;
  permission_id!: number;

  // permission_role belongsTo permissions via permission_id
  permission!: permissions;
  getPermission!: Sequelize.BelongsToGetAssociationMixin<permissions>;
  setPermission!: Sequelize.BelongsToSetAssociationMixin<permissions, permissionsId>;
  createPermission!: Sequelize.BelongsToCreateAssociationMixin<permissions>;
  // permission_role belongsTo roles via role_id
  role!: roles;
  getRole!: Sequelize.BelongsToGetAssociationMixin<roles>;
  setRole!: Sequelize.BelongsToSetAssociationMixin<roles, rolesId>;
  createRole!: Sequelize.BelongsToCreateAssociationMixin<roles>;

  static initModel(sequelize: Sequelize.Sequelize): typeof permission_role {
    permission_role.init({
    role_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'roles',
        key: 'id'
      }
    },
    permission_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'permissions',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'permission_role',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "role_id" },
          { name: "permission_id" },
        ]
      },
      {
        name: "IDX_6A711CAD60322AC",
        using: "BTREE",
        fields: [
          { name: "role_id" },
        ]
      },
      {
        name: "IDX_6A711CAFED90CCA",
        using: "BTREE",
        fields: [
          { name: "permission_id" },
        ]
      },
    ]
  });
  return permission_role;
  }
}
