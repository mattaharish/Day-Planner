/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
	const Todos = sequelize.define('todos', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		user_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'user_detail',
				key: 'id'
			}
		},
		task: {
			type: DataTypes.STRING(45),
			allowNull: false
		},
		due_date: {
			type: DataTypes.DATEONLY,
			allowNull: false
		},
		status: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
		},
		priority: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '1'
		},
		timestamp_create: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
		},
		timestamp_update: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
		}
	}, {
		timestamps: false,
		tableName: 'todos'
	});

	Todos.associate = models => {
		Todos.belongsTo(models.user_detail, {
			foreignKey: 'user_id'
		});
	}

	return Todos;
};