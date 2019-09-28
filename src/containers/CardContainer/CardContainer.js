import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Empty, Spin } from 'antd';
// components
import CardProfile from '../../components/CardProfile/CardProfile';
import CardProfileOrg from '../../components/CardProfileOrg/CardProfileOrg';
import CardProfileRepo from '../../components/CardProfileRepo/CardProfileRepo';
import CardProfileGroup from '../../components/CardProfileGroup/CardProfileGroup';
// actions
import { fetchOrgs } from '../../actions/fetch-orgs';
import { fetchRepos } from '../../actions/fetch-repos';
// css
import './cardcontainer.css';

class CardContainer extends Component {

  componentDidUpdate(prevProps) {
    if ((prevProps.user !== this.props.user) && this.props.user) {
      const { login } = this.props.userData;
      this.props.fetchOrgs(login);
      this.props.fetchRepos(login);
    }
  }

  handleCardClick = (url) => {
    window.open(url, "");
  }

  renderOrgs = () => {
    const { orgs } = this.props.userData;

    if (orgs && orgs.length > 0) {
      return orgs.map(org => {
        return (
          <CardProfileOrg 
            key={org.id}
            loading={this.props.isFetchingOrgs}
            image={org.avatar_url} 
            title={org.login} 
          />
        );
      });
    } else {
      return (
        <div style={{ width: '100%' }}>
          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
        </div>
      );
    }
  }

  renderRepos = () => {
    const { repos } = this.props.userData;

    if (repos && repos.length > 0) {
      return repos.map(repo => {
        return (
          <CardProfileRepo
            onCardClick={this.handleCardClick}
            key={repo.id}
            loading={this.props.isFetchingRepos}
            image={repo.avatar_url} 
            title={repo.name} 
            description={repo.description}
            numOfForks={repo.forks}
            numOfStars={repo.stargazers_count}
            url={repo.html_url}
          />
        );
      });
    } else {
      return (
        <div style={{ width: '100%' }}>
          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
        </div>
      );
    }
  }

  render() {
    if (!this.props.user) return null;

    const { avatar_url: image, login, html_url: link, id } = this.props.userData;
    const { isFetchingOrgs, isFetchingRepos } = this.props;

    return (
      <div className="card-container">
        <CardProfile 
            id={id}
            image={image} 
            link={link} 
            username={login} 
          />
        <div className="card-container__list">
          <CardProfileGroup title="Organizations">
            { 
              isFetchingOrgs 
              ? <Spin /> 
              : this.renderOrgs() 
            }
          </CardProfileGroup>
          <CardProfileGroup title="Repositories">
            {
              isFetchingRepos
              ? <Spin />
              : this.renderRepos()
            }
          </CardProfileGroup>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ userData, isFetchingOrgs, isFetchingRepos }) => ({
  userData,
  isFetchingOrgs,
  isFetchingRepos
});

const mapDispatchToProps = dispatch => ({
  fetchOrgs: login => dispatch(fetchOrgs(login)),
  fetchRepos: login => dispatch(fetchRepos(login))
});

export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);
