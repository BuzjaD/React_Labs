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
      ? this.state.eventsList.filter(event =>
          event.company ? event.company.id === this.props.activeCompanyId : null
        )
      : null;

    return studEvents ? (
      <S.EventsContainer>
        <S.EventsHeader>Company events</S.EventsHeader>
        <S.Events>
          {studEvents.map((event, index) => (
            <S.Event key={index}>
              <S.EventInfo>
                {event.student ? event.student.name : null}
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
