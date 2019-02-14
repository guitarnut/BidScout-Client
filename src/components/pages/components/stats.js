import React from 'react'
import Stat from '../../ui/stat'

function Stats(props) {
  return (
    <div className={'row'}>
        <Stat title="Requests" value={props.parentState.statsRequests}/>
        <Stat title="Bids" value={props.parentState.statsBids}/>
        <Stat title="NBR" value={props.parentState.statsNbr}/>
        <Stat title="Impressions" value={props.parentState.statsImpressions}/>
        <Stat title="Expired Impressions" value={props.parentState.statsExpiredImpressions}/>
        <Stat title="Invalid Impressions" value={props.parentState.statsInvalidImpressions}/>
        <Stat title="Duplicate Impressions" value={props.parentState.statsDuplicateImpressions}/>
        <Stat title="Clicks" value={props.parentState.statsClicks}/>
        <Stat title="eCPM" value={props.parentState.statsEcpm}/>
        <Stat title="Bid Price Total" value={props.parentState.statsBidPriceTotal}/>
        <Stat title="Total Spend" value={props.parentState.statsRevenue}/>
    </div>
  )
}

export default Stats;
