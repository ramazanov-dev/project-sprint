import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import selectors from '../../../selectors';
import entryActions from '../../../entry-actions';

const TermsModal = React.memo(() => {
  const {
    termsForm: { payload: terms },
  } = useSelector(selectors.selectAuthenticateForm);

  const dispatch = useDispatch();

  useEffect(() => {
    if (terms?.signature) {
      dispatch(entryActions.acceptTerms(terms.signature));
    }
  }, [terms?.signature, dispatch]);

  return null;
});

export default TermsModal;
