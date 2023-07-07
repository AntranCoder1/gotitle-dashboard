import Sequelize, { DataTypes, Model, Optional } from 'sequelize';

export interface lien_typesAttributes {
  id: number;
  name: string;
  created_at: Date;
  updated_at: Date;
}

export type lien_typesPk = "id";
export type lien_typesId = lien_types[lien_typesPk];
export type lien_typesCreationAttributes = Optional<lien_typesAttributes, lien_typesPk>;

export class lien_types extends Model<lien_typesAttributes, lien_typesCreationAttributes> implements lien_typesAttributes {
  id!: number;
  name!: string;
  created_at!: Date;
  updated_at!: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof lien_types {
    lien_types.init({
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
    }
  }, {
    sequelize,
    tableName: 'lien_types',
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
  return lien_types;
  }
}
