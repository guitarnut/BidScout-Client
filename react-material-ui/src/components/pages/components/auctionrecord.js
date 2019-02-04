import React from 'react';
import {Badge, Label} from 'react-bootstrap';
import UIButton from "../../ui/button";
import '../../../App.css';
import {convertMilliToDateString} from "../../../common/sharedmethods";

const padding ={
  marginRight: '5px'
};

function AuctionRecord(props) {
  return (
    <div className={'container'}>
      <div className={'col-md-10'}>
        <h2>Bid: {props.bid.bidRequestId}</h2>
      </div>
      <div className={'col-md-2'}>
        <h2><UIButton text="Delete" action={props.delete}/></h2>
      </div>
      <div className={'col-md-12'}>
        <p><strong>Request Timestamp</strong><br/>{convertMilliToDateString(props.bid.requestTimestamp)}</p>
      </div>
      <div className={'col-md-12'}>
        <hr/>
      </div>
      <div className={'col-md-3'}>
        <p><strong>Campaign</strong><br/>{props.campaigns[props.bid.campaign]}</p>
      </div>
      <div className={'col-md-3'}>
        <p><strong>Creative</strong><br/>{props.creatives[props.bid.creative]}</p>
      </div>
      {props.bid.responseTimestamp > 0 &&
      <div className={'col-md-3'}>
        <p><strong>Response
          Milliseconds</strong><br/>
          {props.bid.responseTimestamp - props.bid.requestTimestamp}
        </p>
      </div>
      }
      <div className={'col-md-12'}>
        <hr/>
      </div>
      <div className={'col-md-12'}>
        <p><strong>Targeting Failures</strong></p>
        {props.bid.targetingFailures && Object.keys(props.bid.targetingFailures).length > 0 ?
          <h4>
            {Object.keys(props.bid.targetingFailures).map((v) => {
              return (
                <Label bsStyle='warning' key={v}>{v}: {props.bid.targetingFailures[v]}</Label>
              )
            })}
          </h4>
          : <p>No targeting failures found.</p>
        }
        <p><strong>Errors/Warnings</strong></p>
        {props.bid.bidRequestErrors && props.bid.bidRequestErrors.length > 0 ?
          <h4>
            {Object.keys(props.bid.bidRequestErrors).map((v) => {
              return (
                <Label style={padding} bsStyle='warning' key={v}>{props.bid.bidRequestErrors[v]}</Label>
              )
            })}
          </h4>
          : <p>No bid request errors found.</p>
        }
      </div>
      <div className={'col-md-12'}>
        <hr/>
      </div>
      <div className={'col-md-12'}>
        <p><strong>Request User Agent</strong><br/>
          <pre><code>{props.bid.userAgent}</code></pre>
        </p>
      </div>
      <div className={'col-md-12'}>
        <hr/>
      </div>
      <div className={'col-md-12'}>
        <p><strong>Cookies</strong><br/>
          <pre><code>{props.bid.cookies}</code></pre>
        </p>
      </div>
      <div className={'col-md-12'}>
        <hr/>
      </div>
      <div className={'col-md-4'}>
        <p><strong>Host</strong><br/>{props.bid.host}</p>
      </div>
      <div className={'col-md-4'}>
        <p><strong>IP</strong><br/>{props.bid.ip}</p>
      </div>
      <div className={'col-md-4'}>
        <p><strong>X-Forwarded</strong><br/>{props.bid.xForwardedFor}</p>
      </div>
      <div className={'col-md-12'}>
        <hr/>
      </div>
      <div className={'col-md-12'}>
        <p><strong>Markup</strong><br/>
          <pre><code>{props.bid.markup}</code></pre>
        </p>
      </div>
      <div className={'col-md-12'}>
        <hr/>
      </div>
      <div className={'col-md-12'}>
        <p><strong>Bid Request</strong><br/>
          <pre><code>{props.request}</code></pre>
        </p>
      </div>
      <div className={'col-md-12'}>
        <hr/>
      </div>
      <div className={'col-md-12'}>
        <p><strong>Bid Response</strong><br/>
          <pre><code>{props.response}</code></pre>
        </p>
      </div>
      <div className={'col-md-12'}>
        <hr/>
      </div>
      <div className={'col-md-12'}>
        <h4>Impressions</h4>
      </div>
      {props.impressions.map((v) => {
        return (
          <div key={v}>
            <div className={'col-md-12'}>
              <p><strong>URL:</strong><br/>
                <pre><code>{v.url}</code></pre>
              </p>
            </div>
            <div className={'col-md-12'}>
              <p><strong>User Agent:</strong><br/>
                <pre><code>{v.userAgent}</code></pre>
              </p>
            </div>
            <div className={'col-md-3'}>
              <p><Badge>${v.bidPrice}</Badge> <strong>Bid Price</strong></p>
            </div>
            <div className={'col-md-3'}>
              <p><strong><Badge>${v.cp}</Badge> Clearing Price</strong></p>
            </div>
            <div className={'col-md-3'}>
              <p><strong>Host:</strong> {v.host}</p>
            </div>
            <div className={'col-md-3'}>
              <p><strong>IP:</strong> {v.ip}</p>
            </div>
            <div className={'col-md-12'}>
              <p><strong>Timestamp:</strong> {convertMilliToDateString(v.impressionTimestamp)}</p>
            </div>
          </div>
        )
      })}
      <div className={'col-md-12'}>
        <hr/>
      </div>
      <div className={'col-md-12'}>
        <h4>Events</h4>
      </div>
      {props.clicks.map((v) => {
        return (
          <div key={v}>
            <div className={'col-md-12'}>
              <p><strong>URL:</strong><br/>
                <pre><code>{v.url}</code></pre>
              </p>
            </div>
            <div className={'col-md-3'}>
              <p><strong>User Agent:</strong><br/>
                <pre><code>{v.userAgent}</code></pre>
              </p>
            </div>
            <div className={'col-md-3'}>
              <p><strong>Timestamp:</strong> {convertMilliToDateString(v.impressionTimestamp)}</p>
            </div>
            <div className={'col-md-3'}>
              <p><strong>Host:</strong> {v.host}</p>
            </div>
            <div className={'col-md-3'}>
              <p><strong>IP:</strong> {v.ip}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default AuctionRecord;
