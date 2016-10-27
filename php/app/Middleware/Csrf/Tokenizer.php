<?php

namespace App\Middleware\Csrf;

use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Message\ResponseInterface;

class Tokenizer
{
    /**
     * @var string
     */
    protected $prefix;

    /**
     * Tokenizer constructor.
     * @param string $prefix
     */
    public function __construct($prefix = 'csrf')
    {
        $this->prefix = $prefix;
    }

    /**
     * @param ServerRequestInterface $request
     * @param ResponseInterface $response
     * @param callable $next
     * @return mixed
     */
    public function __invoke(ServerRequestInterface $request, ResponseInterface $response, callable $next)
    {
        setcookie("csrf_token_name", $request->getAttribute("{$this->prefix}_name"));
        setcookie("csrf_token_value", $request->getAttribute("{$this->prefix}_value"));

        return $next($request, $response);
    }

}