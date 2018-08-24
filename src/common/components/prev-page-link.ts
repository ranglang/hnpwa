import { connect } from 'react-redux';
import { Link, LinkProps } from 'react-router-dom';
import { AppState } from 'common/store/types';
import { getPrevPage } from 'common/store/modules/posts/selectors';
import { routes } from 'common/routes';
import { withVisibility, VisibilityProps } from 'common/hocs/withVisibility';

type StateProps = VisibilityProps<Pick<LinkProps, 'to' | 'children'>>;

const mapStateToProps = (state: AppState): StateProps => {
  const prevPage = getPrevPage(state);

  if (!prevPage) {
    return {
      isVisible: false
    };
  }

  return {
    isVisible: true,
    to: routes.top.generatePath(prevPage),
    children: 'Prev page'
  }
}

export default connect(mapStateToProps, undefined, (stateProps) => stateProps)(withVisibility(Link));
