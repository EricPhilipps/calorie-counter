const Date = require('./Date');
const Calorie = require('./Calorie');

Date.hasMany(Calorie, {
  foreignKey: 'date_id',
  onDelete: 'CASCADE'
});

Calorie.belongsTo(Date, {
  foreignKey: 'date_id'
});

module.exports = { Date, Calorie };