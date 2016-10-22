<?php
/**
 *
 */

namespace App\Controller;

use Interop\Container\ContainerInterface;
use Slim\Http\Request;
use Slim\Http\Response;

class Home
{
    /**
     * @var ContainerInterface
     */
    protected $ci;

    /**
     * Home constructor.
     * @param ContainerInterface $ci
     */
    public function __construct(ContainerInterface $ci)
    {
        $this->ci = $ci;
    }

    /**
     * @return ContainerInterface
     */
    public function getContainer()
    {
        return $this->ci;
    }

    /**
     * @param Request $request
     * @param Response $response
     * @return Response
     */
    public function invert(Request $request, Response $response)
    {
        $string = $request->getParam('string');
        $result = implode('', array_reverse(str_split($string)));

        return $response->withJson(['result' => $result], 200);
    }

}
