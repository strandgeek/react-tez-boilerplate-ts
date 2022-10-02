import { BigMapAbstraction } from "@taquito/taquito";
import classNames from "classnames";
import React, { FC, useCallback, useEffect, useState } from "react";
import { ActiveAccountInfo, ConnectWalletButton, useContract, useWallet } from "react-tez";

export interface HomeProps {}

export const Home: FC<HomeProps> = (props) => {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState<string[]>([]);
  const { activeAccountAddress } = useWallet();
  const contract = useContract("KT1HQgTAw5zFaYaBU611TWCquyigZ5Js1CCv");

  const getPosts = useCallback(async () => {
    setLoading(true);
    if (!contract || !activeAccountAddress) {
      return;
    }
    const storage = await contract.storage<BigMapAbstraction>();
    const posts = await storage.get<string[]>(activeAccountAddress);
    if (posts) {
      setPosts(posts);
    }
    setLoading(false);
  }, [contract, activeAccountAddress]);

  // Load Posts when contract is ready
  useEffect(() => {
    getPosts();
  }, [contract, activeAccountAddress, getPosts]);

  const onPostClick = async () => {
    setLoading(true);
    if (!contract) {
      console.error("Could not load contract.");
      return;
    }
    const call = contract.methods.default(text);
    try {
      const res = await call.send();
      await res.confirmation(1);
      await getPosts();
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };
  return (
    <div className="mx-auto max-w-xl my-12 px-4">
      <ActiveAccountInfo secondaryInfo="network" />
      <div className="form-control w-full mt-4">
        <label className="label">
          <span className="label-text">What is on your mind?</span>
        </label>
        <textarea
          className="textarea textarea-bordered"
          placeholder="Type something..."
          value={text}
          disabled={loading}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
      </div>
      {activeAccountAddress ? (
        <button
          className={classNames("btn btn-primary w-full mt-2", {
            loading,
            disabled: loading,
          })}
          onClick={onPostClick}
        >
          {loading ? "Loading" : "Create Post"}
        </button>
      ): (
        <ConnectWalletButton color="primary" className="w-full mt-2" />
      )}

      {!loading && (
        <div>
          <h2 className="mt-12 mb-4 text-2xl">Posts</h2>
          {posts.length === 0 && (
            <div className="opacity-50">
              <div className="font-bold">No Posts</div>
              <div>Your posts will appear here</div>
            </div>
          )}
          {posts.map((text, idx) => (
            <div key={idx} className="card w-full bg-base-100 shadow mb-2">
              <div className="card-body">
                <ActiveAccountInfo />
                <p className="mt-2">{text}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
