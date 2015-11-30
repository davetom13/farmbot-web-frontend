import React from 'react';
import { renderScheduleCreation } from './schedule_creation'
import { Schedule } from '../../../models/schedule'

export class ScheduleEvent extends React.Component {
  render () {
    var evnt = this.props.scheduledEvent;

    return <div className="row event { this.hasPassed() ? 'past' : '' }">
              <div className="small-12 columns">
                <div className="event-time">
                  { evnt.formatTime() }
                </div>
                <i className="event-icon fi-camera"></i>
                <div className="event-title">{ evnt.desc }</div>
                <i className="edit-icon fi-pencil right"></i>
              </div>
           </div>;
  }
}

export class Calendar extends React.Component {
  render () {
    var events = _(Schedule.fakes)
                   .sortBy('time')
                   .map((s, k) => <ScheduleEvent scheduledEvent={s} key={k}/>)
                   .value();

     return <div className="panel-container magenta-panel">
              <div className="calendar">
                <div className="row">
                  <div className="small-12 columns">
                    <div className="widget-header calendar-widget">
                      <h5>Calendar</h5>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="small-12 columns">
                    <div className="widget-content calendar-widget">
                      <div className="search-box-wrapper">
                        <input className="search" placeholder="Search"/>
                        <div className="search-underline"></div>
                      </div>
                      { events }
                    </div>
                  </div>
                </div>
                <div className="plus-button add-event button-like" data-toggle="tooltip" title="Add event" href="/dashboard/designer?designer_right_menu=AddEvent">
                  <i className="fa fa-2x fa-plus" />
                </div>
              </div>
            </div>
  }
}