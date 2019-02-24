import React from "react";
import * as S from "./style";
import eventsListData from "../../config/Data_Events";
class Events extends React.Component {
  state = {
    eventsList: null
  };

  componentDidMount = () => {
    this.setState({
      eventsList: eventsListData
    });
  };

  render() {
    const studEvents = this.state.eventsList
      ? this.state.eventsList.filter(
          event => event.student.id === this.props.activeStudentId
        )
      : null;

    return studEvents ? (
      <S.EventsContainer>
        <S.EventsHeader>Student events</S.EventsHeader>
        <S.Events>
          {studEvents.map((event, index) => (
            <S.Event key={index}>
              <S.EventInfo>
                {event.company ? event.company.name : null}
              </S.EventInfo>
              <S.EventInfo>{event.text}</S.EventInfo>
              <S.EventDate>{event.date}</S.EventDate>
            </S.Event>
          ))}
        </S.Events>
      </S.EventsContainer>
    ) : null;
  }
}

export default Events;
