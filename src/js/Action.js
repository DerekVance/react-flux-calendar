var AppDispatcher = require('./Dispatcher.js');
var appConstants = require('./Constants.js');

var plannerActions = {
  newMonth: function (date) {
    AppDispatcher.handleViewAction({
      actionType: appConstants.NEW_MONTH,
      data: date
    });
  },
  findMonth: function (direction) {
    AppDispatcher.handleViewAction({
      actionType: appConstants.FIND_MONTH,
      data: direction
    });
  },
  selectedDay: function (dayNum) {
    AppDispatcher.handleViewAction({
      actionType: appConstants.SELECTED_DAY,
      data: dayNum
    });
  },
  addEvents: function (evt) {
    AppDispatcher.handleViewAction({
      actionType: appConstants.ADD_EVENTS,
      data: evt
    });
  },
  deleteEvents: function (evt) {
    AppDispatcher.handleViewAction({
      actionType: appConstants.DELETE_EVENTS,
      data: evt
    })
  },
  addToDo: function (toDo) {
    AppDispatcher.handleViewAction({
      actionType: appConstants.ADD_TODO,
      data: toDo
    })
  },
  deleteToDo: function (toDo) {
    AppDispatcher.handleViewAction({
      actionType: appConstants.DELETE_TODO,
      data: toDo
    })
  },
  toDoStatus: function (toDo) {
    AppDispatcher.handleViewAction({
      actionType: appConstants.TODO_STATUS,
      data: toDo
    })
  },
  setUser: function (user) {
    AppDispatcher.handleViewAction({
      actionType: appConstants.SET_USER,
      data: user
    })
  }
};

module.exports = plannerActions;
