import { OnRpcRequestHandler } from '@metamask/snaps-sdk';
import { signTransaction, connectAccount } from './rpc';

export * from './rpc-types';

/**
 * Handle incoming JSON-RPC requests, sent through `wallet_invokeSnap`.
 *
 * @param args - The request handler args as object.
 * @param args.origin - The origin of the request, e.g., the website that
 * invoked the snap.
 * @param args.request - A validated JSON-RPC request object.
 * @returns The result of `snap_dialog`.
 * @throws If the request method is not valid for this snap.
 */
export const onRpcRequest: OnRpcRequestHandler = async ({
  request,
}) => {
  switch (request.method) {
    case 'eos_connectAccount':
      return await connectAccount();

    case 'eos_signTransaction':
      return await signTransaction();

    default:
      throw new Error('Method not found.');
  }
};

