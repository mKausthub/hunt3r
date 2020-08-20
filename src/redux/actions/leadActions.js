import { GET_LEADS, START_LOADING } from '../actionTypes';

export const getLeads = () => async (dispatch) => {
  const mockLeads = [
    {
      name: 'Carolyn Everson',
      avatar_url: '/images/avatars/avatar_1.png',
      company: 'Facebook',
      title: 'VP Of Marketing',
      email: 'carolyn@fb.com'
    },
    {
      name: 'LechnerMarketing',
      avatar_url: '/images/avatars/avatar_2.png',
      company: 'WeWork',
      title: 'Marketing Specialist',
      email: 'stefanie.lechner@wework.com'
    },
    {
      name: 'Marcus Dehart',
      avatar_url: '/images/avatars/avatar_3.png',
      company: 'Amazon',
      title: 'Marketing Specialist',
      email: 'mdehart@amazon.com'
    },
    {
      name: 'Paulo Barreto',
      avatar_url: '/images/avatars/avatar_4.png',
      company: 'Facebook',
      title: 'Marketing Digital',
      email: 'paulobarreto@fb.com'
    },
    {
      name: 'Alon Schwartz',
      avatar_url: '/images/avatars/avatar_5.png',
      company: 'WeWork',
      title: 'Marketing Manager',
      email: 'aschwartz@wework.com'
    },
    {
      name: 'Naomi Harker',
      avatar_url: '/images/avatars/avatar_6.png',
      company: 'Amazon',
      title: 'Marketing Manager',
      email: 'nharker@amazon.com'
    },
    {
      name: 'Kristen Messier',
      avatar_url: '/images/avatars/avatar_7.png',
      company: 'Facebook',
      title: 'Recruiter Marketing',
      email: 'kristenm@fb.com'
    },
    {
      name: 'Craig Schäfer',
      avatar_url: '/images/avatars/avatar_8.png',
      company: 'WeWork',
      title: 'Marketing Manager',
      email: 'craig.schaefer@wework.com'
    },
    {
      name: 'John Everson',
      avatar_url: '/images/avatars/avatar_9.png',
      company: 'Amazon',
      title: 'International Business',
      email: 'john@amazon.com'
    },
    {
      name: 'Hunter',
      avatar_url: '/images/avatars/avatar_10.png',
      company: 'Amazon',
      title: 'Marketing Media',
      email: 'lunak@amazon.com'
    },
    {
      name: 'Meaning',
      avatar_url: '/images/avatars/avatar_11.png',
      company: 'Amazon',
      title: 'Sales Support',
      email: 'josepapo@amazon.com'
    }
  ];

  try {
    await dispatch({ type: START_LOADING });
    await timeDelay(2000);
    await dispatch({ type: GET_LEADS, payload: mockLeads });
  } catch (err) {
    console.log(err);
  }
};

const timeDelay = (time) => {
  return new Promise((resolve) => {
    setTimeout(function () {
      resolve();
    }, time);
  });
};
