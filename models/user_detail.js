/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
	const UserDetail = sequelize.define('user_detail', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		first_name: {
			type: DataTypes.STRING(45),
			allowNull: false
		},
		last_name: {
			type: DataTypes.STRING(45),
			allowNull: false
		},
		email: {
			type: DataTypes.STRING(45),
			allowNull: false,
			unique: true
		},
		password: {
			type: DataTypes.STRING(45),
			allowNull: false
		},
		mobile: {
			type: DataTypes.STRING(20),
			allowNull: true
		},
		date_of_birth: {
			type: DataTypes.DATE,
			allowNull: true
		},
		timestamp_create: {
			type: DataTypes.DATE,
			allowNull: true,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
		},
		timestamp_update: {
			type: DataTypes.DATE,
			allowNull: true,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
		}
	}, {
		tableName: 'user_detail',
		timestamps: false
	});

	UserDetail.associate = models => {
		UserDetail.hasMany(models.todos, {foreignKey: 'user_id', constraints: false});
	}

	return UserDetail;
};