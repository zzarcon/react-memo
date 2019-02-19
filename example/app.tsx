import * as React from 'react';
import {Component} from 'react';
import {GHCorner} from 'react-gh-corner';
import memo from '../src';

import {AppWrapper} from './styled';

export interface AppState {
  repoUrl: string; 
}

interface AppContentProps {
  href: string;
}

const AppContent = (props: AppContentProps) => {
  const {href} = props;

  return (
    <AppWrapper>
      <GHCorner openInNewTab href={href} />
      {href}
    </AppWrapper>
  )
}

const AppContentMemo = memo(AppContent);

export default class App extends Component <{}, AppState> {
  state: AppState = {
    repoUrl: 'https://github.com/zzarcon/'
  }

  changeUrl = () => {
    this.setState({
      repoUrl: `${this.state.repoUrl}1`
    })
  }

  keepUrl = () => {
    this.setState({
      repoUrl: this.state.repoUrl
    })
  }

  render() {
    const {repoUrl} = this.state;

    return (
      <div>
        <AppContentMemo href={repoUrl} />
        <button onClick={this.changeUrl}>Change url</button>
        <button onClick={this.keepUrl}>Keep url</button>
      </div>
    )
  }
}