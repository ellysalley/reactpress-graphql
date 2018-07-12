import PostList from "../components/ui/PostList";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import Loader from "../components/ui/Loader";
import withNextApollo from "../../../decorators/withNextApollo";
import React from "react";
import { compose } from "recompose";

const AccountPage = ({ data }) => {
  return <div>Je suis la page d'acompte</div>;
};

export default AccountPage;
