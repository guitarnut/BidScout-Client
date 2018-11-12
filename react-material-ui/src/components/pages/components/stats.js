import React from 'react'
import Stat from '../../ui/stat'

function Stats(props) {
  return (
    <div>
      <Stat title="Requests" value={props.data.requests}/>
      <Stat title="Bids" value={props.data.bids}/>
      <Stat title="NBR" value={props.data.nbr}/>
      <Stat title="Impressions" value={props.data.impressions}/>
      <Stat title="Expired Impressions" value={props.data.expiredImpressions}/>
      <Stat title="Invalid Impressions" value={props.data.invalidImpressions}/>
      <Stat title="Duplicate Impressions" value={props.data.duplicateImpressions}/>
      <Stat title="Clicks" value={props.data.clicks}/>
      <Stat title="eCPM" value={props.data.ecpm}/>
      <Stat title="Bid Price Total" value={props.data.bidPriceTotal}/>
      <Stat title="Total Spend" value={props.data.revenue}/>
    </div>
  )
}
export default Stats;
