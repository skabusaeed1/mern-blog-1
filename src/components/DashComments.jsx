import { Button, Modal, Table } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { FaCheck, FaTimes } from 'react-icons/fa';
import { HiOutlineExclamationCircle } from 'react-icons/hi'

const DashComments = () => {
  const [comments, setComments] = useState([]);
  const { currentUser } = useSelector((state) => state.user);
  const [showMore, setShowMore] = useState(true);
  const [ showModal, setShowModal ] = useState(false);
  const [ commentIdToDelete, setCommentIdToDelete ] = useState('');

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await fetch(`/api/comment/getComments`);
        const data = await res.json();
        if (!res.ok) {
          console.log(data.message);
          return;
        }
        if (res.ok) {
          setComments(data.comments);
          if (data.comments.length < 9) {
            setShowMore(false);
          }
        }
      } catch (err) {
        console.log(err);
      }
    };
    if (currentUser.isAdmin) {
      fetchComments();
    }
  }, [currentUser._id]);

  const handleShowMore = async () => {
    const startIndex = comments.length;
    try {
      const res = await fetch(
        `/api/comment/getComments?startIndex=${startIndex}`
      );
      const data = await res.json();
      if (res.ok) {
        setComments(prev=>[...prev, ...data.comments]);
      }
      if (data.comments.length < 9) {
        setShowMore(false);
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleDeleteComment = async()=>{
    setShowModal(false);
    try{
        const res = await fetch(`/api/comment/deleteComment/${commentIdToDelete}`,{
            method : 'DELETE',
        });
        const data = await res.json();

        if(!res.ok){
            console.log(data.message);
        }
        if(res.ok){
            setComments(prev => prev.filter(comment => comment._id !== commentIdToDelete ) );
            setShowModal(false);
        }
    }
    catch(err){
        console.log(err);
    }
  };


  return (
    <div className="table-auto overflow-x-scroll md:mx-auto p-3 scrollbar scrollbar-track-slate-100 scrollbar-thumb-slate-300 dark:scrollbar-track-slate-700 dark:scrollbar-thumb-slate-500 ">
      {currentUser.isAdmin && comments?.length > 0 ? (
        <>
          <Table hoverable className="shadow-md">
            <Table.Head>
              <Table.HeadCell>Date created</Table.HeadCell>
              <Table.HeadCell>Comment content</Table.HeadCell>
              <Table.HeadCell>Number of likes</Table.HeadCell>
              <Table.HeadCell>postId</Table.HeadCell>
              <Table.HeadCell>userId</Table.HeadCell>
              <Table.HeadCell>Delete</Table.HeadCell>
            </Table.Head>
            {comments.map((comment) => (
              <Table.Body className="divide-y" key={comment._id}>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell key={comment._id}>
                    {new Date(comment.updatedAt).toLocaleDateString()}
                  </Table.Cell>
                  <Table.Cell>{ comment.content }</Table.Cell>
                  <Table.Cell>{comment.numberOfLikes}</Table.Cell>
                  <Table.Cell>{comment.postId}</Table.Cell>
                  <Table.Cell>{comment.userId}</Table.Cell>
                  <Table.Cell >
                    <span className="font-medium text-red-500 hover:underline cursor-pointer"  onClick={() => {
                        setShowModal(true);
                        setCommentIdToDelete(comment._id);
                    }}
                  >Delete</span>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            ))}
          </Table>
          {showMore && (
            <>
              <button
                onClick={handleShowMore}
                className="w-full text-teal-500 self-center text-sm py-7"
              >
                Show More
              </button>
            </>
          )}
        </>
      ) : (
        <p>You have no comments yet!</p>
      )}
      {showModal && (
        <Modal
          show={showModal}
          onClose={() => setShowModal(false)}
          popup
          size={"md"}
        >
          <Modal.Header />
          <Modal.Body>
            <div className="text-center">
              <HiOutlineExclamationCircle className="h-14 w-14 text-gray-400 dark:text-gray-200 mb-4 mx-auto" />
              <h3 className="mb-5 text-lg text-gray-500 dark:text-gray-400">
                Are you sure you want to delete this comment?
              </h3>
              <div className="flex justify-center gap-4">
                <Button onClick={handleDeleteComment} color={"failure"}>
                  Yes, I'm sure
                </Button>
                <Button onClick={() => setShowModal(false)} color={"gray"}>
                  No, Cancel
                </Button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      )}
    </div>
  );
};

export default DashComments;