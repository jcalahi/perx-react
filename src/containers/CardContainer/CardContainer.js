import React, { Component } from 'react';
import { connect } from 'react-redux';
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

  renderOrgs = source => {
    return source.map(org => {
      return (
        <CardProfileOrg 
          key={org.id}
          image={org.avatar_url} 
          title={org.login} 
        />
      );
    });
  }

  renderRepos = source => {
    return source.map(repo => {
      return (
        <CardProfileRepo
          onCardClick={this.handleCardClick}
          key={repo.id}
          image={repo.avatar_url} 
          title={repo.name} 
          description={repo.description}
          numOfForks={repo.forks}
          numOfStars={repo.stargazers_count}
          url={repo.html_url}
        />
      );
    });
  }

  render() {
    if (!this.props.user) return null;

    const { avatar_url: image, login, html_url: link, id, orgs, repos } = this.props.userData;
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
          <CardProfileGroup title="Organizations" dataSource={orgs} loading={isFetchingOrgs}>
            {(dataSource) => this.renderOrgs(dataSource)}
          </CardProfileGroup>
          <CardProfileGroup title="Repositories" dataSource={repos} loading={isFetchingRepos}>
            {(dataSource) => this.renderRepos(dataSource)}
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
